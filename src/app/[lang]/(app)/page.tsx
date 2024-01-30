import LocaleSwitcher from '@/components/shared/locale-switcher';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const Home: React.FC<{ params: { lang: Locale } }> = async (props) => {
  const { page } = await getDictionary(props.params.lang);

  return (
    <>
      <LocaleSwitcher></LocaleSwitcher>
      <div className="mt-6">
        <h1 className="text-3xl mb-1 font-bold">{page.home.title}</h1>
        <p className="text-gray-500 text-lg">{page.home.description}</p>
      </div>
    </>
  );
};

export default Home;
