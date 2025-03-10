import React from 'react';
import { formatDate } from '@/utils/utilFunctions';
import Link from 'next/link';
import { faTrashCan } from '@/graphics/faRegular';

const Table = ({
  tableName,
  headers,
  data,
  onRowClick,
  formatCell = (item, column) => {
    if ((column === 'accountCreated' || column === 'event_date' || column === 'joinDate' || column === 'date') && item[column]) {
      return formatDate(new Date(item[column]));
    }
    return item[column] || '';
  },
  rowClassName = (index) => index % 2 === 0 ? "bg-bg-primary" : "bg-bg-secondary",
  className,
  style,
  headerStyle,
  cellStyle,
  emptyText,
  clickable = true,
  onDeleteClick,
}) => {
  const colWidth = headers.length > 0 ? `${100 / headers.length}%` : 'auto';

  const compareDates = (a, b) => {
    let dateA = new Date(a?.["event_date"]);
    let dateB = new Date(b?.["event_date"]);

    if (a?.["event_date"]) {
      return dateB - dateA;
    }
    if (a?.["joinDate"]) {
      dateA = new Date(a?.["joinDate"]);
      dateB = new Date(b?.["joinDate"]);
      return dateB - dateA;
    }
    if (a?.["accountCreated"]) {
      dateA = new Date(a?.["accountCreated"]);
      dateB = new Date(b?.["accountCreated"]);
      return dateB - dateA;
    }
  };

  const sortedData = [...data].sort(compareDates);

  return (
    <div className={`space-y-[1rem] ${className}`} style={style}>
      <div className="!font-secondary displayS">
        {tableName}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-grey-400 text-[24px] text-left space-y-[-1px] border-separate border-spacing-0 border-collapse">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className={`bg-bg-secondary px-[1.5rem] py-[0.75rem] text-dark-500 detail-bold ${header.key === 'actions' ? 'text-right' : ''}`} style={{ width: colWidth, ...headerStyle }}>
                  {header.text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.length ? sortedData.map((item, index) => (
              <tr
                key={index}
                className={`space-x-[-1px] [&>*]:border-t ${rowClassName(index)} ${clickable ? "cursor-pointer hover:opacity-[0.6]" : ""}`}
                onClick={onRowClick ? () => onRowClick(item) : undefined}
              >
                {headers.map((header, idx) => (
                  <td
                    key={idx}
                    className={`px-[1.5rem] py-[0.75rem] text-dark-300 detail ${header.key === 'actions' ? 'text-right' : ''}`}
                    style={{ width: colWidth, ...cellStyle }}
                  >
                    {header.key === 'actions' ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteClick(item.assessID);
                        }}
                        className="px-3 py-1.5 group"
                      >
                        {faTrashCan("h-[1rem] fill-gray-400 group-hover:fill-red-600 transition-colors duration-200")}
                      </button>
                    ) : (
                      formatCell(item, header.key)
                    )}
                  </td>
                ))}
              </tr>
            ))
              :
              <tr className={`space-x-[-1px] [&>*]:border-t`}>
                <td colSpan={headers.length} className='text-center w-full bg-bg-primary detail py-[0.75rem] '>{emptyText}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
