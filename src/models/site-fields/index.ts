import { IObjectWithKey } from 'office-ui-fabric-react/lib/DetailsList';

export interface SiteField extends IObjectWithKey {
    ID: string;
    Type: SiteFieldType;
    Name: string;
    DisplayName: string;
    Group?: string;
    Required?: boolean;
}

export enum SiteFieldType {
    AllDayEvent,
    Attachments,
    Boolean,
    Calculated,
    Choice,
    Computed,
    ContentTypeId,
    Counter,
    CrossProjectLink,
    Currency,
    DateTime,
    File,
    GridChoice,
    Guid,
    Integer,
    Lookup,
    LookupMulti,
    ModStat,
    MultiChoice,
    MultiColumn,
    Note,
    Number,
    PageSeparator,
    Recurrence,
    Text,
    ThreadIndex,
    Threading,
    URL,
    User,
    UserMulti,
    WorkflowEventType,
    WorkflowStatus,
}
