/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2021 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { Pane as BasePane, PaneProps } from 'go-split';

export function Pane(props: PaneProps) {
  return <BasePane {...props} />;
}
