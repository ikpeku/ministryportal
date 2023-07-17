import React from "react";

const Businesses = () => {
  return (
    <main>
    <div className="recent-grid">
    <div className="projects">
        <div className="card">
            <div className="card-header">
                <h2>List Of Businesses</h2>

                <button>See all <span className="las la-arrow-right">
                </span></button>
            </div>

            <div className="card-body">
                <div className="tabel-responsive">
                    <table width="100%">
                        <thead>
                            <tr>
                                <td>Business Owner</td>
                                <td>Business Name</td>
                                <td>Sector</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> Micheal Jordan</td>
                                <td>Sanville Resort</td>
                                <td> Gas</td>

                                <td>
                                    <span className="status purple"></span>
                                    Review
                                </td>
                            </tr>
                            <tr>
                                <td>Usen Udoh</td>
                                <td>Ibeno Beach</td>
                                <td>Oil</td>
                                <td>
                                    <span className="status pink"></span>
                                    In progress
                                </td>
                            </tr>
                            <tr>
                                <td>Denis Mel</td>
                                <td>Marina Hotel and Suit</td>
                                <td>Power</td>
                                <td>
                                    <span className="status green"></span>
                                    Approved
                                </td>
                            </tr>

                            <tr>
                                <td> Yangu Sesem</td>
                                <td>temple Plaza</td>
                                <td>Consultant</td>
                                <td>
                                    <span className="status purple"></span>
                                    Review
                                </td>
                            </tr>
                            <tr>
                                <td>Janet Austin</td>
                                <td>MountView Hotel</td>
                                <td>Energy</td>
                                <td>
                                    <span className="status pink"></span>
                                    in progress
                                </td>
                            </tr>
                            <tr>
                                <td>Moses Akai</td>
                                <td>Gento Resort</td>
                                <td>Power</td>
                                <td>
                                    <span className="status green"></span>
                                    Approved
                                </td>
                            </tr>

                            <tr>
                                <td>Joseph Justub</td>
                                <td>Marylan Beach</td>
                                <td>Oil</td>
                                <td>
                                    <span className="status purple"></span>
                                    in progress
                                </td>
                            </tr>
                            <tr>
                                <td>Ansel Korosi</td>
                                <td>Sanfield Park</td>
                                <td>Gas</td>
                                <td>
                                    <span className="status pink"></span>
                                    Pending
                                </td>
                            </tr>

                            <tr>
                                <td>Effiong Joshua</td>
                                <td>Parkveille Plaza</td>
                                <td>Energy</td>
                                <td>
                                    <span className="status orange"></span>
                                    review
                                </td>
                            </tr>
                            <tr>
                                <td>Sally Jose</td>
                                <td>Miranna Beach and Resort</td>
                                <td>Power</td>
                                <td>
                                    <span className="status purple"></span>
                                    in progress
                                </td>
                            </tr>
                            <tr>
                                <td>Henry Prince</td>
                                <td>Xen city Fun hub</td>
                                <td>Oil</td>
                                <td>
                                    <span className="status green"></span>
                                    Approved
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

export default Businesses;
