/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2021 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import styled from 'reshadow';

import { useStyles } from '@cloudbeaver/core-theming';

interface Props {
  className?: string;
}

export const TableHeader: React.FC<Props> = function TableHeader({ children, className }) {
  return styled(useStyles())(
    <thead className={className}>
      <tr>
        {children}
      </tr>
    </thead>
  );
};
