import PageHead from "@/components/commons/PageHead";
import { Fragment, ReactNode } from "react";
import Nav from "../Nav";

interface PropTypes {
  children: ReactNode;
  title?: string;
}

const Layout = (props: PropTypes) => {
  const { children, title } = props;

  return (
    <Fragment>
      <PageHead title={title} />

      <div className="max-w-screen-3xl 3xl:container">
        {/* Nav Menu */}
        <Nav />

        <div className="h-screen w-full overflow-auto">
          {/* Content */}
          {/* <div className="h-full w-full lg:max-w-[75rem] lg:px-0 px-4 m-auto"> */}
          {children}
          {/* </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
