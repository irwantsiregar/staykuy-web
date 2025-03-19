import PageHead from "@/components/commons/PageHead";
import { Fragment, ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  title?: string;
}

const DashboardLayout = (props: PropTypes) => {
  const { children, title } = props;

  return (
    <Fragment>
      <PageHead title={title} />

      <div className="max-w-screen-3xl 3xl:container flex">
        {/* Nav Menu */}

        <div className="h-screen w-full overflow-auto p-8">
          {/* Content */}
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardLayout;
