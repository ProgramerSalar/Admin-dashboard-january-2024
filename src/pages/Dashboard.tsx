import { BsSearch } from "react-icons/bs";
import AdminSideBar from "../components/AdminSideBar";
import { FaRegBell } from "react-icons/fa";
import userPic from "../assets/userpic.png";
import Widget from "../components/Widget";
import data from "../assets/data.json";
import { CategoryItem } from "../components/CategoryItem";
import { BarChart, DoughnutChart } from "../components/Chart";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../components/DashboardTable"

const Dashboard = () => {
  return (
    <div className="admin-Container">
      <AdminSideBar />

      {/* header section  */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userPic} alt="User" />
        </div>

        {/* widget section  */}
        <section className="widget-container">
          <Widget
            heading="Review"
            value={343}
            percent={40}
            color="rgb(0,115, 255)"
          />
          <Widget
            heading="Users"
            value={343}
            percent={40}
            color="rgb(0,115, 255)"
          />
          <Widget
            heading="Transaction"
            value={343}
            percent={40}
            color="rgb(0,115, 255)"
            amount={true}
          />
          <Widget
            heading="Products"
            value={343}
            percent={40}
            color="rgb(0,115, 255)"
          />
        </section>

        <section className="graph-container">
          <div className="revinew-chart">
            <h2>Review & Transaction</h2>
            <BarChart
              data_1={[34, 32, 34, 32, 43, 42, 23]}
              data_2={[43, 32, 43, 34, 32, 12, 32]}
              title_1="Revinew"
              title_2="Transaction"
              bgColor_1="rgb(0, 115, 255)"
              bgColor_2="rgb(53, 162, 235, 0.8)"
            />
          </div>
          <div className="dashboard-categories">
            <h2>Inventery</h2>
            {data.categories.map((i) => (
              <CategoryItem
                key={i.heading}
                heading={i.heading}
                value={i.value}
                color={`hsl(${i.value * 4},${i.value}%,50%)`}
              />
            ))}
          </div>
        </section>

        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>

            {/* chart  */}
            <DoughnutChart
              labels={["male", "female"]}
              data={[12, 18]}
              backgroundColor={["hsl(340,82%, 56)", "rgba(53, 162, 235, 0.8)"]}
              cutout={60}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>

          {/* Table  */}
          <Table data={data.transaction} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
