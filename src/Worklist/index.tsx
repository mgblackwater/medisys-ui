import React, { Component, ReactElement } from 'react';
import { Card, Avatar } from 'antd';
import './style';

export interface KanbanColumn {
  title: string;
  description?: string;
  backgroundColor: string;
}

export interface KanbanProps {
  columns: KanbanColumn[];
  className: string;
}

export interface ColumnProps {
  title: string;
}

const CardList: React.FC<any> = () => {
  const { Meta } = Card;
  return (
    <div style={{ margin: '1em' }}>
      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
};

const Board: React.FC<KanbanProps> = ({ columns, className }) => {
  return (
    <div className={className}>
      {columns.map(c => (
        <div
          className="kanban-column"
          style={{
            minWidth: 100,
            backgroundColor: c.backgroundColor,
            textAlign: 'center',
          }}
        >
          <div className="kanban-column-title">{c.title}</div>
          <CardList />
        </div>
      ))}
    </div>
  );
};

const Column: React.FC<ColumnProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default ({ title }: { title: string }) => {
  console.log(title);
  return (
    <Board
      className="kanban-board"
      columns={[
        { title: 'New', backgroundColor: 'green' },
        { title: 'Prepared', backgroundColor: '#996600' },
        { title: 'Verified', backgroundColor: '#009999' },
        { title: 'Completed', backgroundColor: '#336666' },
      ]}
    />
  );
};
