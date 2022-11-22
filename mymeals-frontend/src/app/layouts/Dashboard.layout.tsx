import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import SidebarComponent from "../components/Sidebar.component";

function DashboardLayout(props: PropsWithChildren) {

	return (
		<div className="dashboard dashboard__container">
			<SidebarComponent/>
			<div className="dashboard__inner">
				<Outlet/>
			</div>
		</div>
	);
}

export default DashboardLayout;
