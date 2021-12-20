import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign In with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const providers = getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default Login;
