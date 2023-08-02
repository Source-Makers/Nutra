using Telegram.Bot;
using Telegram.Bot.Types;

namespace Nutra.TgBot.Repository
{
    public class Repository
    {
        private string _loggerPath = Path.Combine(Environment.CurrentDirectory, "Log.txt");
        private string _tokenPath = Path.Combine(Environment.CurrentDirectory, "Token.txt");
        private string _token;

        public Repository()
        {
            _token = GetToken();
            if (String.IsNullOrEmpty(_token))
                System.IO.File.AppendAllText(_loggerPath, "TgBot.Repository || Error: Напишите токен и перезапустите приложение.");
        }

        private string GetToken()
        {
            if (!System.IO.File.Exists(_tokenPath))
                System.IO.File.Create(_tokenPath);

            using StreamReader reader = new(_tokenPath);
                return reader.ReadToEnd();
        }
        
        public void RunBot()
        {
            var client = new TelegramBotClient(_token);
            client.StartReceiving(Update, Error);
        }

        private async Task Update(ITelegramBotClient botClient, Update update, CancellationToken token)
        {
            string directory = Path.Combine(Environment.CurrentDirectory, "Photos");
            string dateTime = $"{DateTime.Now}".Replace(' ', '_').Replace('.', '_').Replace(':', '_');
            var msg = update.Message;

            if (msg == null)
                return;

            if(msg.Photo != null)
            {


                var photo = msg.Photo;
                int photoIndex = photo.Length;
                var photoInfo = await botClient.GetFileAsync(photo[photoIndex-1].FileId);
                var photoPath = photoInfo.FilePath;

                if (!Directory.Exists(directory))
                {
                    Directory.CreateDirectory(directory);
                }

                string destinationPhotoPath = Path.Combine(directory, $"{msg.Chat.FirstName}_{dateTime}.jpg");

                await using Stream fileStream = System.IO.File.Create(destinationPhotoPath);
                await botClient.DownloadFileAsync(photoPath, fileStream);
                fileStream.Close();

            }

        }

        private Task Error(ITelegramBotClient client, Exception exception, CancellationToken token)
        {
            System.IO.File.AppendAllText(_loggerPath, $"TgBot.Repository || Error: {exception.Message}");

            throw new Exception();
        }
    }
}
