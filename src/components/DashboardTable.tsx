import { Column } from "react-table"
import TableHOC from "./TableHoc"



interface DataType{
    id:string;
    quantity:number;
    discount:number;
    amount:number;
    status:string;
}


const columns:Column<DataType>[] = [

    {
        Header:"Id",
        accessor:"id",
    },
    {
        Header:"Quantity",
        accessor:"quantity",
    },
    {
        Header:"DisCount",
        accessor:"discount",
    },
    {
        Header:"Amount",
        accessor:"amount",
    },
    {
        Header:"Status",
        accessor:"status",
    },
]


const DashboardTable = ({data=[]}: {data:DataType[]}) => {
    return TableHOC<DataType>(columns, data, "transaction-Box", "Top Transaction")()
}



export default DashboardTable; 