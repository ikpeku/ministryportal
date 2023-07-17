import React from "react";

const Statictis = () => {
  return (
    <main>
    {/* row 1 start */}
    <h3 className="font-bold text-lg">Users/Vendors Statistic</h3>
                        <div className="cards text-center">
                            <div className="card-single">
                                <div>
                                    <h1>54</h1>
                                    <span>Users</span>
                                </div>
                                <div>
                                    <span className="las la-users"></span>
                                </div>
                            </div>
                            <div className="card-single">
                                <div>
                                    <h1>54</h1>
                                    <span>Business/Outlet</span>
                                </div>
                                <div>
                                    <span className="las la-users"></span>
                                </div>
                            </div>
    
                            <div className="card-single">
                                <div>
                                    <h1>79</h1>
                                    <span>Transaction</span>
                                </div>
                                <div>
                                    <span className="las la-clipboard-list"></span>
                                </div>
                            </div>
                            <div className="card-single">
                                <div>
                                    <h1>124</h1>
                                    <span>Active Subscriptions</span>
                                </div>
                                <div>
                                    <span className="las la-shopping-bag"></span>
                                </div>
                            </div>
    
                            </div>
    
                            <br />
    
                            <h3 className="font-bold text-lg">Generated Revenue</h3>
    
                            {/* second row */}
                            <div className="cards text-center">
    
                                <div className="card-single bg-[#0a3e0a] text-white">
                                    <div>
                                        <h1>&#8358;  6k</h1>
                                        <span>Today</span>
                                    </div>
                                    <div>
                                        <span className="lab la-google-wallet"></span>
                                    </div>
                                </div>
    
    
    
                            <div className="card-single bg-[#0a3e0a] text-white">
                                <div>
                                    <h1>&#8358; 50k</h1>
                                    <span>This Week</span>
                                </div>
                                <div>
                                    <span className="lab la-google-wallet"></span>
                                </div>
                            </div>
                            <div className="card-single bg-[#0a3e0a] text-white">
                                <div>
                                    <h1>&#8358; 120k</h1>
                                    <span>This Month</span>
                                </div>
                                <div>
                                    <span className="lab la-google-wallet"></span>
                                </div>
                            </div>
                            <div className="card-single bg-[#0a3e0a] text-white">
                                <div>
                                    <h1>&#8358; 500k</h1>
                                    <span>This Year</span>
                                </div>
                                <div>
                                    <span className="lab la-google-wallet"></span>
                                </div>
                            </div>
                        </div>
        {/* second row end*/}
                       
                    </main>
  );
};

export default Statictis;
