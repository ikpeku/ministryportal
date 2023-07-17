import React from "react";

const Transactions = () => {
  return (
    <main>
    <div className="recent-grid">
    <div className="projects">
        <div className="card">
            <div className="card-header">
                <h2>Transactions</h2>

                <button>See all <span className="las la-arrow-right">
                </span></button>
            </div>

            <div className="card-body">
                <div className="tabel-responsive">
                    <table width="100%">
                        <thead>
                            <tr>
                                <td>User</td>
                                <td>Business Name</td>
                                <td>Amount</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> Micheal Jordan</td>
                                <td>Sanville Resort</td>
                                <td>&#8358;  6k</td>

                                <td>
                                    <span className="status green"></span>
                                    Successful
                                </td>
                            </tr>
                            <tr>
                                <td>Usen Udoh</td>
                                <td>Ibeno Beach</td>
                                <td>&#8358;  6k</td>
                                <td>
                                    <span className="status green"></span>
                                    Successful
                                </td>
                            </tr>
                            <tr>
                                <td>Denis Mel</td>
                                <td>Marina Hotel and Suit</td>
                                <td>&#8358;  6k</td>
                                <td>
                                    <span className="status bg-red-950"></span>
                                    Cancelled
                                </td>
                            </tr>

                            <tr>
                                <td> Yangu Sesem</td>
                                <td>temple Plaza</td>
                                <td>&#8358;  4k</td>
                                <td>
                                    <span className="status green"></span>
                                    Successful
                                </td>
                            </tr>
                            <tr>
                                <td>Janet Austin</td>
                                <td>MountView Hotel</td>
                                <td>&#8358;  3k</td>
                                <td>
                                    <span className="status green"></span>
                                    Successful
                                </td>
                            </tr>
                            <tr>
                                <td>Moses Akai</td>
                                <td>Gento Resort</td>
                                <td>&#8358;  2k</td>
                                <td>
                                    <span className="status green"></span>
                                    Successful
                                </td>
                            </tr>

                            <tr>
                                <td>Joseph Justub</td>
                                <td>Marylan Beach</td>
                                <td>&#8358;  2k</td>
                                <td>
                                    <span className="status green"></span>
                                    Success
                                </td>
                            </tr>
                            <tr>
                                <td>Ansel Korosi</td>
                                <td>Sanfield Park</td>
                                <td>&#8358;  6k</td>
                                <td>
                                    <span className="status bg-red-950"></span>
                                    Cancelled
                                </td>
                            </tr>

                            <tr>
                                <td>Effiong Joshua</td>
                                <td>Parkveille Plaza</td>
                                <td>&#8358;  3k</td>
                                <td>
                                    <span className="status green"></span>
                                    Success
                                </td>
                            </tr>
                            <tr>
                                <td>Sally Jose</td>
                                <td>Miranna Beach and Resort</td>
                                <td>&#8358;  2k</td>
                                <td>
                                    <span className="status green"></span>
                                    Success
                                </td>
                            </tr>
                            <tr>
                                <td>Henry Prince</td>
                                <td>Xen city Fun hub</td>
                                <td>&#8358;  6k</td>
                                <td>
                                    <span className="status bg-red-950"></span>
                                    Cancelled
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</div>
</main>
  );
};

export default Transactions;
