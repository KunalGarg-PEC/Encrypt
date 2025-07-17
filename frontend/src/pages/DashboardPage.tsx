import React, { useEffect, useState } from 'react';
import ReactFlow, { Node, Edge } from 'react-flow-renderer';
import api from '../services/api';

export default function DashboardPage() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  useEffect(() => {
    api.get('/orchestrator/plan').then(res => {
      setNodes(res.data.nodes);
      setEdges(res.data.edges);
    });
  }, []);

  return <div style={{ width: '100%', height: '90vh' }}>
    <ReactFlow nodes={nodes} edges={edges} />
  </div>;
}
