import { cn } from '@/lib/utils';

const LoginPage = () => {
  return (
    <>Login Page</>
    // <AuthCard
    //   title="Welcome Back"
    //   description="We suggest using the email address you use at work."
    //   cardContent={<LoginForm />}
    //   className="h-[34rem] w-full lg:w-[34rem] flex flex-col gap-4"
    // />
  );
};

export default LoginPage;

interface AuthCardProps {
  title: string;
  description: string;
  cardContent: React.ReactNode;
  className?: string;
}

const AuthCard = ({
  cardContent,
  description,
  title,
  className,
}: AuthCardProps) => (
  <section
    className={cn([
      `${className} px-[3rem] py-[4rem] md:px-[4rem] md:py-[4rem] flex flex-col gap-8 rounded bg-white shadow-card`,
    ])}
  >
    <div className="flex flex-col">
      <h2 className="font-heading md:text-m1 text-l1  font-bold text-text-primary ">
        {title}
      </h2>
      <p className="font-heading  text-text-secondary text-r1 leading-5">
        {description}
      </p>
    </div>
    {cardContent}
  </section>
);
