import React from "react";

const page = () => {
  return (
    <div
      className="hero h-screen p-5  flex items-center justify-center"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/high-angle-shot-beautiful-forest-with-lot-green-trees-enveloped-fog-new-zealand_181624-19717.jpg?w=1380&t=st=1700064528~exp=1700065128~hmac=98538f8c7aa1a3e326c8901057d298d49e7a34fec1fe0386b113ab3cfa19ad2a")`,
      }}
    >
      <div className="container card bg-white p-10 shadow-2xl">
        <div className="card-body">
          <div className="navbar shadow-xl rounded-xl mb-4 p-4 bg-white">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl"> Morph </a>
            </div>
            <div className="flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a href="/login">Sign in</a>
                </li>
                <li>
                  <a>Sin up</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card shadow-xl bg-white">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <a href="/product">
                  <span className="btn btn-primary">lets go</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
