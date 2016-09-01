using Live.Configuration;
using Live.Data;
using Live.Services;
using Live.Utilities;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.InterceptionExtension;

namespace Live
{
    public class UnityConfiguration
    {
        public static IUnityContainer GetContainer()
        {
            var container = new UnityContainer().AddNewExtension<Interception>();
            container.RegisterType<IDbContext, DataContext>();
            container.RegisterType<IUow, Uow>();
            container.RegisterType<IRepositoryProvider, RepositoryProvider>();
            container.RegisterType<IIdentityService, IdentityService>();
            container.RegisterType<ILoggerFactory, LoggerFactory>();
            container.RegisterType<ICacheProvider, CacheProvider>();
            container.RegisterType<IEncryptionService, EncryptionService>();
            container.RegisterType<ILogger, Logger>();

            container.RegisterType<IBookService, BookService>();
            container.RegisterType<IThemeService, ThemeService>();
            container.RegisterType<IAuthorService, AuthorService>();

            container.RegisterInstance(AuthConfiguration.LazyConfig);            
            return container;
        }
    }
}
