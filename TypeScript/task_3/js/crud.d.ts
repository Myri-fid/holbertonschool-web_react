import { RowID, RowElement } from "./interface";

namespace CRUD {
  let rows: { [key: number]: RowElement } = {};
  let currentId: number = 0;

  export function insertRow(row: RowElement): RowID {
    currentId += 1;
    rows[currentId] = row;
    return currentId as RowID;
  }

  export function deleteRow(rowId: RowID): void {
    delete rows[rowId as number];
  }

  export function updateRow(rowId: RowID, row: RowElement): RowID {
    rows[rowId as number] = row;
    return rowId;
  }
}

export { CRUD };