export interface NavBarAction {
    key: string;
    name: string;
    url: string;
}

export interface ContentState {
    SelectedProvisioningTemplateVersion: string;
    ProvisioningTemplateVersions: string[];
    ProvisioningTemplateNavBarActions: NavBarAction[];
}

export const initialState: ContentState = {
    SelectedProvisioningTemplateVersion: '',
    ProvisioningTemplateVersions: [
        '2018-05',
        '2018-01',
        '2017-05',
        '2016-05',
        '2015-12',
        '2015-08',
        '2015-05',
    ],
    ProvisioningTemplateNavBarActions: [
        {
            key: 'provisioning-template',
            name: 'Provisioning Template',
            url: '',
        },
        {
            key: 'site-fields',
            name: 'Site Fields',
            url: '/site-fields',
        },
        {
            key: 'content-types',
            name: 'Content types',
            url: '/content-types',
        },
    ],
};
