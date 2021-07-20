/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2021 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { observer } from 'mobx-react-lite';
import styled, { css, use } from 'reshadow';

import {
  Table, TableHeader, TableColumnHeader, TableBody
} from '@cloudbeaver/core-blocks';
import { useTranslate } from '@cloudbeaver/core-localization';
import { useStyles, composes } from '@cloudbeaver/core-theming';

import type { DatabaseConnection } from '../../ConnectionsResource';
import { Connection } from './Connection';

const styles = composes(
  css`
    TableItemSeparator {
      composes: theme-background-secondary from global;
    }
  `,
  css`
    Table {
      width: 100%;
    }
    TableItemSeparator {
      text-align: center;
    }
  `
);

interface Props {
  connections: DatabaseConnection[];
  selectedItems: Map<string, boolean>;
  expandedItems: Map<string, boolean>;
}

export const ConnectionsTable = observer(function ConnectionsTable({
  connections,
  selectedItems,
  expandedItems,
}: Props) {
  const translate = useTranslate();

  return styled(useStyles(styles))(
    <Table selectedItems={selectedItems} expandedItems={expandedItems} {...use({ size: 'big' })}>
      <TableHeader>
        <TableColumnHeader min />
        <TableColumnHeader min />
        <TableColumnHeader min />
        <TableColumnHeader>{translate('connections_connection_name')}</TableColumnHeader>
        <TableColumnHeader>{translate('connections_connection_address')}</TableColumnHeader>
        <TableColumnHeader />
      </TableHeader>
      <TableBody>
        {connections.map(connection => <Connection key={connection.id} connection={connection} />)}
      </TableBody>
    </Table>
  );
});
