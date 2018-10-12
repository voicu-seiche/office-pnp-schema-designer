import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
import { CheckboxVisibility, ConstrainMode, DetailsList, DetailsListLayoutMode as LayoutMode, IColumn, Selection, SelectionMode } from 'office-ui-fabric-react/lib/DetailsList';
import { SiteField, SiteFieldType } from '../models/site-fields';

// tslint:disable-next-line:no-any
export interface SiteFieldsProps extends RouteComponentProps<any> {
}

let _items: SiteField[];

export interface SiteFieldsState {
    columns?: IColumn[];
    items?: SiteField[];
}

export class SiteFields extends React.Component<SiteFieldsProps, SiteFieldsState> {
    private _selection: Selection;

    constructor(props: SiteFieldsProps) {
        super(props);

        if (!_items) {
            _items = [
                {
                    ID: '00000000-0000-0000-0000-000000000000',
                    Type: SiteFieldType.Text,
                    Name: 'a',
                    DisplayName: 'A',
                    Group: 'Misc',
                    Required: false,
                },
                {
                    ID: '00000000-0000-0000-0000-000000000000',
                    Type: SiteFieldType.Number,
                    Name: 'b',
                    DisplayName: 'B',
                    Group: 'Misc',
                    Required: false,
                },
            ];
        }

        this._selection = new Selection();
        this._selection.setItems(_items, false);

        this.state = {
            items: _items,
            columns: this._buildColumns(),
        };
    }

    public render(): JSX.Element {
        const {
            columns,
            items,
        } = this.state;

        return (
            <div>
                <CommandBar items={this._getCommandItems()} />

                <DetailsList
                    setKey="items"
                    items={items as SiteField[]}
                    columns={columns}
                    checkboxVisibility={CheckboxVisibility.onHover}
                    layoutMode={LayoutMode.justified}
                    isHeaderVisible={true}
                    selectionMode={SelectionMode.multiple}
                    constrainMode={ConstrainMode.horizontalConstrained}
                    enterModalSelectionOnTouch={true}
                    ariaLabelForListHeader="Column headers. Use menus to perform column operations like sort and filter"
                    ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                    ariaLabelForSelectionColumn="Toggle selection"
                />
            </div>
        );
    }

    private _getCommandItems = (): IContextualMenuItem[] => {
        return [
            {
                key: 'add-site-field',
                text: 'Add site field',
                iconProps: { iconName: 'Add' },
                subMenuProps: {
                    items: [
                        {
                            key: 'new-field',
                            text: 'New field',
                            iconProps: { iconName: 'Add' },
                            onClick: this._onAddRow,
                        },
                        {
                            key: 'existing-field',
                            text: 'Existing field',
                            iconProps: { iconName: 'Add' },
                            onClick: this._onAddRow,
                        },
                    ]
                }
            },
            {
                key: 'deleteRow',
                text: 'Delete row',
                iconProps: { iconName: 'Delete' },
                disabled: this._selection.getSelectedCount() === 0,
                onClick: this._onDeleteRow
            },
        ];
    }

    private _onAddRow = (): void => {
        return;
    }

    private _onDeleteRow = (): void => {
        return;
    }

    private _buildColumns() {
        const columns: IColumn[] = [
            {
                key: 'field-id',
                name: 'ID',
                fieldName: 'ID',
                minWidth: 0,
            },
            {
                key: 'field-type',
                name: 'Type',
                fieldName: 'Type',
                minWidth: 0,
                onRender: (item?: SiteField, index?: number, column?: IColumn) => {
                    return (
                        <span>{item ? SiteFieldType[item.Type] : ''}</span>
                    );
                },
            },
            {
                key: 'field-name',
                name: 'Name',
                fieldName: 'Name',
                minWidth: 0,
            },
            {
                key: 'field-display-name',
                name: 'Display Name',
                fieldName: 'Display Name',
                minWidth: 0,
            },
            {
                key: 'field-group',
                name: 'Group',
                fieldName: 'Group',
                minWidth: 0,
            },
            {
                key: 'field-required',
                name: 'Required',
                fieldName: 'Required',
                minWidth: 0,
            },
        ];

        return columns;
    }
}

export default connect()(withRouter<SiteFieldsProps>(SiteFields));
