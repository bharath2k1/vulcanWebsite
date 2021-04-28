import React, { useEffect, useState } from "react";

function createData(specification, detail) {
  return { specification, detail };
}

const rows = [];

export default function BasicTable({ table }) {
  const tableItems = table;

  {
    tableItems.map((item) => {
      Object.entries(item).forEach(([key, value]) =>
        rows.push(createData(key, value))
      );
    });
  }

  const uniqueArray = rows.filter((thing, index) => {
    const _thing = JSON.stringify(thing);
    return (
      index ===
      rows.findIndex((obj) => {
        return JSON.stringify(obj) === _thing;
      })
    );
  });

  return (
    <div>
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Specification</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {uniqueArray.map((row) => (
            <tr>
              <td data-label="Name">{row.specification}</td>
              <td data-label="Age">{row.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
