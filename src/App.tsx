import { Suspense, lazy } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";












import Customer from "./pages/Customer";
import Product from "./pages/Product";
import Transaction from "./pages/Transaction";
import NewProduct from "./pages/management/NewProduct";
import ProductManagement from "./pages/management/ProductManagement";
import TransactionManagement from "./pages/management/TransactionManagement";
import BarCharts from "./pages/charts/BarCharts";
import LineCharts from "./pages/charts/LineCharts";
import Stopwatch from "./pages/apps/stopwatch";
import Coupon from "./pages/apps/Coupon";
import Toss from "./pages/apps/Toss";



const Dashboard = lazy(() => import("./pages/Dashboard"));
const PieChart = lazy(() => import("./pages/charts/PieCharts"));

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<Link to="/admin/dashboard"><button>Go To Dashboard</button></Link>} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/product" element={<Product/>} />
        <Route path="/admin/customer" element={<Customer/>} />
        <Route path="/admin/transaction" element={<Transaction/>} />

        {/* management  */}
        <Route path="/admin/product/admin/product/new" element={<NewProduct/>} />
        <Route path="/admin/product/:id" element={<ProductManagement/>} />
        <Route path="/admin/transaction/:id" element={<TransactionManagement/>} />

        {/* charts  */}
        <Route path="/admin/chart/bar" element={<BarCharts />} />
        <Route path="/admin/chart/pie" element={<PieChart />} />
        <Route path="/admin/chart/line" element={<LineCharts />} />

        {/* apps  */}
        <Route path="/admin/app/stopwatch" element={<Stopwatch/>} />
        <Route path="/admin/app/coupon" element={<Coupon/>} />
        <Route path="/admin/app/toss" element={<Toss/>} />





      </Routes>

    </Suspense>
    
    </BrowserRouter>
  );
};

export default App;
