const options = [
    {
        "label": "Create a new distribution list",
        "options": null,
        "value": "create_a_new_distribution_list",
        "id": 38965685,
        "raw_name": "{{dc.create_a_new_distribution_list}}"
    },
    {
        "label": "Create a new shared mailbox",
        "options": null,
        "value": "create_a_new_shared_mailbox",
        "id": 38965705,
        "raw_name": "{{dc.create_a_new_shared_mailbox}}"
    },
    {
        "label": "Delete an existing distribution list",
        "options": null,
        "value": "__dc.distlistsharedmailbox-delete_an_existing_distribution_list__",
        "id": 360023441519,
        "raw_name": "{{dc.distlistsharedmailbox-delete_an_existing_distribution_list}}"
    },
    {
        "label": "Delete an existing shared mailbox",
        "options": null,
        "value": "__dc.distlistsharedmailbox-delete_an_existing_shared_mailbox__",
        "id": 360023441539,
        "raw_name": "{{dc.distlistsharedmailbox-delete_an_existing_shared_mailbox}}"
    },
    {
        "label": "Update an existing distribution list",
        "options": [
            {
                "label": "Add user(s)",
                "options": null,
                "value": "__dc.distlistsharedmailbox-update_an_existing_distribution_list-add_user_s__",
                "id": 360023441359,
                "raw_name": "{{dc.distlistsharedmailbox-update_an_existing_distribution_list-add_user_s}}"
            },
            {
                "label": "Replace owner",
                "options": null,
                "value": "__dc.distlistsharedmailbox-update_an_existing_distribution_list-change_owner__",
                "id": 360023441379,
                "raw_name": "{{dc.distlistsharedmailbox-update_an_existing_distribution_list-change_owner}}"
            },
            {
                "label": "Remove user(s)",
                "options": null,
                "value": "__dc.distlistsharedmailbox-update_an_existing_distribution_list-remove_user_s__",
                "id": 360023441399,
                "raw_name": "{{dc.distlistsharedmailbox-update_an_existing_distribution_list-remove_user_s}}"
            },
            {
                "label": "Rename",
                "options": null,
                "value": "__dc.distlistsharedmailbox-update_an_existing_distribution_list-rename__",
                "id": 360023441419,
                "raw_name": "{{dc.distlistsharedmailbox-update_an_existing_distribution_list-rename}}"
            },
            {
                "label": "Additional owner",
                "options": null,
                "value": "__dc_distlistsharedmailbox_update_an_existing_distribution_list_additional_owner__",
                "id": 5528716950546,
                "raw_name": "{{dc.distlistsharedmailbox-update_an_existing_distribution_list-additional_owner}}"
            }
        ]
    },
    {
        "label": "Update existing shared mailbox",
        "options": [
            {
                "label": "Add user(s)",
                "options": null,
                "value": "__dc.distlistsharedmailbox-update_existing_shared_mailbox-add_user_s__",
                "id": 360023441439,
                "raw_name": "{{dc.distlistsharedmailbox-update_existing_shared_mailbox-add_user_s}}"
            },
            {
                "label": "Change owner",
                "options": null,
                "value": "__dc.distlistsharedmailbox-update_existing_shared_mailbox-change_owner__",
                "id": 360023441459,
                "raw_name": "{{dc.distlistsharedmailbox-update_existing_shared_mailbox-change_owner}}"
            },
            {
                "label": "Remove user(s)",
                "options": null,
                "value": "__dc.distlistsharedmailbox-update_existing_shared_mailbox-remove_user_s__",
                "id": 360023441479,
                "raw_name": "{{dc.distlistsharedmailbox-update_existing_shared_mailbox-remove_user_s}}"
            },
            {
                "label": "Rename",
                "options": null,
                "value": "__dc.distlistsharedmailbox-update_existing_shared_mailbox-rename__",
                "id": 360023441499,
                "raw_name": "{{dc.distlistsharedmailbox-update_existing_shared_mailbox-rename}}"
            }
        ]
    }
]
let value;
function getItem(options, matchWith) {
    if (!Array.isArray(options)) return null;
    for (const element of options) {
        if (element.value === matchWith) {
            return element;
        }
        if (element.options && Array.isArray(element.options)) {
            const found = getItem(element.options, matchWith);
            if (found) return found;
        }
    }
    return null;
}

console.log(getItem(options, '__dc.distlistsharedmailbox-update_existing_shared_mailbox-change_owner__'))
