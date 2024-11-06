import React from "react";
import "./Schedule.css";

export default function ScheduleApp() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="NumeLess"></th>
            <th className="NameGryp">
              <div className="flex_center">2-ИСП9-45</div>
            </th>
            <th className="NameGryp">
              <div className="flex_center">2-ИСП9-45</div>
            </th>
            <th className="NameGryp">
              <div className="flex_center">2-ИСП9-45</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {arr.map((el) => {
            return (
              <tr key={el}>
                <td className="NumeLess">
                  <div className="Nume">{el}</div>
                </td>
                <td className="LessGryp">
                  <div className="flex_center">
                    <b>МДК 02.01. ОЭВМ</b>
                    <div className="flex">
                      <div>Вашкевич С.И.</div>
                      <div>307</div>
                    </div>
                  </div>
                </td>
                <td className="LessGryp">
                  <div className="flex_center">
                    <b>МДК 02.01. ОЭВМ</b>
                    <div className="flex">
                      <div>Вашкевич С.И.</div>
                      <div>307</div>
                    </div>
                  </div>
                </td>
                <td className="LessGryp">
                  <div className="flex_center">
                    <b>МДК 02.01. ОЭВМ</b>
                    <div className="flex">
                      <div>Вашкевич С.И.</div>
                      <div>307</div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
