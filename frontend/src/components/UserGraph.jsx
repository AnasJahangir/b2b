// src/components/UserTree.js
import React, { useEffect, useState } from "react";
import { DataSet, Network } from "vis-network/standalone";

import { fetchUsers } from "../api";

const UserTree = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
      createTree(fetchedUsers);
    };

    getUsers();
  }, []);

  const createTree = (users) => {
    const nodes = new DataSet(
      users.map((user) => ({
        id: user._id,
        label: user.name,
      }))
    );

    const edges = new DataSet(
      users.flatMap((user) =>
        user.referrers.map((referrer) => ({
          from: referrer._id,
          to: user._id,
        }))
      )
    );

    const data = { nodes, edges };
    const options = {
      layout: {
        hierarchical: {
          direction: "UD",
          sortMethod: "directed",
        },
      },
      physics: false,
      interaction: {
        hover: true,
      },
    };

    const container = document.getElementById("tree");
    const network = new Network(container, data, options);

    // Center the graph
    network.fit();
  };

  return <div id="tree" style={{ height: "100vh" }} />;
};

export default UserTree;
