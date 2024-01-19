import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdvancedStatistic from "./ui/AdvancedStatistic";
import BoostLink from "./ui/BoostLink";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import UrlProvider from "./UrlProvider";

const queryClient = new QueryClient();
function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <UrlProvider>
          <Header></Header>
          <Hero></Hero>
          <AdvancedStatistic></AdvancedStatistic>
          <BoostLink></BoostLink>
          <Footer></Footer>
        </UrlProvider>
      </QueryClientProvider>
    </main>
  );
}

export default App;
