import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SignIn() {

    return (
        <div className="mt-10">
            <Card>

                <CardHeader variant="gradient" color="gray" className="mb-2 p-6 flex flex-col md:flex-row item-start md:items-center justify-between overflow-visible">
                    <Typography variant="h6" color="white" className="whitespace-nowrap">
                        Sign In
                    </Typography>
                    <i className="text-sm">
                        Admin
                    </i>
                </CardHeader>

                <CardBody className="flex flex-col lg:flex-row gap-5">
                    <div className="flex flex-col w-full lg:w-1/2">
                        <div className="flex justify-between px-4 py-4 bg-gray-200 border border-gray-400">
                            <span className="font-semibold">Trade Summary - Today</span>
                            <span className="font-semibold">15-01-2024 01:29:38</span>
                        </div>
                        <div className="flex justify-between px-4 py-1 bg-gray-50 border-b border-x border-gray-400">
                            <span>Margin Used</span>
                            <span>Rs. 0.00</span>
                        </div>
                        <div className="flex justify-between px-4 py-1 bg-gray-50 border-b border-x border-gray-400">
                            <span>Running Trades</span>
                            <span>0</span>
                        </div>
                        <div className="flex justify-between px-4 py-1 bg-gray-50 border-b border-x border-gray-400">
                            <span>Pending Orders</span>
                            <span>0</span>
                        </div>
                        <div className="flex justify-between px-4 py-1 bg-gray-50 border-b border-x border-gray-400">
                            <span>Complete Trades</span>
                            <span>0</span>
                        </div>
                        <div className="flex justify-between px-4 py-1 bg-gray-50 border-b border-x border-gray-400">
                            <span>Win Rate</span>
                            <span>N/A</span>
                        </div>
                        <div className="flex justify-between px-4 py-1 bg-gray-50 border-b border-x border-gray-400">
                            <span className="font-medium">Realized Profit/Loss</span>
                            <span className="font-medium">Rs. 0.00</span>
                        </div>
                        <div className="flex justify-between px-4 py-1 bg-gray-50 border-b border-x border-gray-400">
                            <span>Brokerage, Taxes & Fee</span>
                            <span>(Rs. 0.00)</span>
                        </div>
                        <div className="flex justify-between px-4 py-1 bg-gray-50 border-b border-x border-gray-400">
                            <span className="font-medium">Net Realized Profit/Loss</span>
                            <span className="font-medium">Rs. 0.00</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2">
                        <div className="flex justify-between px-4 py-4 bg-gray-200 border border-gray-400">
                            <span className="font-semibold">Trade Summary - Today</span>
                            <span className="font-semibold">15-01-2024 01:29:38</span>
                        </div>
                        <div className="flex justify-center bg-gray-50 border-b border-x border-gray-400">
                            <Link to="/dashboard/reports/day-wise-summary" className="w-full flex justify-center items-center text-white bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-900 whitespace-nowrap py-1 px-4 transition-all duration-300">Daywise Summary</Link>
                        </div>
                        <div className="flex justify-between px-4 py-1 bg-gray-50 border-b border-x border-gray-400">
                            <span>Margin Used</span>
                            <span>Rs. 0.00</span>
                        </div>
                        <div className="flex justify-between px-4 py-1 bg-gray-50 border-b border-x border-gray-400">
                            <span>Complete Trades</span>
                            <span>0</span>
                        </div>
                        <div className="flex justify-between px-4 py-1 bg-gray-50 border-b border-x border-gray-400">
                            <span>Win Rate</span>
                            <span>0 (0 Won / 0 Lost)</span>
                        </div>
                        <div className="flex justify-between px-4 py-1 bg-gray-50 border-b border-x border-gray-400">
                            <span className="font-medium">Realized Profit/Loss</span>
                            <span className="font-medium">Rs. 0.00</span>
                        </div>
                        <div className="flex justify-between px-4 py-1 bg-gray-50 border-b border-x border-gray-400">
                            <span>Taxes & Fee</span>
                            <span>Rs. 0.00</span>
                        </div>
                        <div className="flex justify-between px-4 py-1 bg-gray-50 border-b border-x border-gray-400">
                            <span>Brokerage</span>
                            <span>Rs. 0.00</span>
                        </div>
                        <div className="flex justify-between px-4 py-1 bg-gray-50 border-b border-x border-gray-400">
                            <span className="font-medium">Net Realized Profit/Loss</span>
                            <span className="font-medium">Rs. 0.00</span>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default SignIn;