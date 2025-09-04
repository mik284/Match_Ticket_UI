import ProTable, {
  ActionType,
  ProColumns,
  ProTableProps,
} from '@ant-design/pro-table';
import { FormInstance } from 'antd';
import React from 'react';

// Define props type for your component
type ProTableComponentProps<T = any, U = any> = {
  revalidateOnFocus?: boolean;
  style?: React.CSSProperties;
  scroll?: { x?: number | string | true; y?: number | string };
  search?: ProTableProps<T, U>['search'] | false;
  formRef?: React.MutableRefObject<FormInstance<any> | undefined>;
  actionRef?: React.MutableRefObject<ActionType | undefined>;
  rowSelection?: ProTableProps<T, U>['rowSelection'];
  columns: ProColumns<T>[];
  request?: ProTableProps<T, U>['request'];
  onSubmit?: (params: U) => void;
  onReset?: () => void;
  rowKey?: string | ((record: T) => string);
  pagination?: ProTableProps<T, U>['pagination'];
  headerTitle?: React.ReactNode;
  toolBarRender?: ProTableProps<T, U>['toolBarRender'];
  dataSource?: T[];
  editable?: ProTableProps<T, U>['editable'];
  onRow?: ProTableProps<T, U>['onRow'];
  expandable?: ProTableProps<T, U>['expandable'];
};

const ProTableComponent = <
  T extends Record<string, any>,
  U extends Record<string, any>,
>(
  props: ProTableComponentProps<T, U>,
) => {
  return (
    <ProTable<T, U>
      revalidateOnFocus={props.revalidateOnFocus}
      style={props.style}
      scroll={props.scroll}
      search={props.search ? { ...props.search, layout: 'vertical' } : false}
      formRef={props.formRef}
      actionRef={props.actionRef}
      rowSelection={props.rowSelection}
      columns={props.columns}
      request={props.request}
      onSubmit={props.onSubmit}
      onReset={props.onReset}
      rowKey={props.rowKey}
      pagination={{
        ...props.pagination,
        pageSize: 10,
        pageSizeOptions: [
          '10',
          '20',
          '50',
          '100',
          '500',
          '1000',
          '5000',
          '10000',
          '50000',
          '100000',
        ],
      }}
      dateFormatter="string"
      headerTitle={props.headerTitle}
      toolBarRender={props.toolBarRender}
      dataSource={props.dataSource}
      editable={props.editable}
      onRow={props.onRow}
      expandable={props.expandable}
    />
  );
};

export default ProTableComponent;
