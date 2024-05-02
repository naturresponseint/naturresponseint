import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { siteLinks } from "./Link";

const Landing = React.lazy(() => import("../pages/Landing"));
const Home = React.lazy(() => import("../pages/Home"));

function BaseRouter() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <>
              <div>
                <CircularProgress
                  sx={{
                    color: "#ffe353",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </>
          }
        >
          <Routes>
            <Route path={siteLinks?.Landing} element={<Landing />} />
            <Route path={siteLinks?.Home} element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default BaseRouter;
