import RootLayout from "./layouts/root-layout";
import Loader from "./app/common/loader";
import ScrollToTop from "./globals/scroll-to-top";
import { useState } from "react";
import { AuthProvider } from "./app/context/auth/AuthContext";
import { UserProvider } from "./app/context/auth/UserContext";
import { ToastContainer } from "react-toastify";
import { MilestoneProvider } from "./app/context/candidates/MilestoneContext";

function App() {

  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

	// add apifyprovider, candidateProvider, employerprovider
  return (
		<UserProvider>
			<AuthProvider>
				<MilestoneProvider>
					{isLoading && <Loader />}
					<ScrollToTop />
					<RootLayout />
					<ToastContainer position="top-center" />
				</MilestoneProvider>
			</AuthProvider>
		</UserProvider>
	);
}

export default App;