const questions = [
    {
        q: "A Service Catalog may include which of the following components?",
        options: [
            {val: "A", text: "Order Guides, Exchange Rates, Calendars"},
            {val: "B", text: "Order Guides, Catalog Items, and Interceptors"},
            {val: "C", text: "Catalog Items, Asset Contracts, Task Surveys"},
            {val: "D", text: "Record Producers, Order Guides, and Catalog Item"},
        ],
        answer: "D"
    },
    {
        q: "Which one of the following statements applies to a set of fields when they are coalesced during an import?",
        options: [
            {val: "A", text: "If a match is found using the coalesce fields, the existing record is updated with the information being imported"},
            {val: "B", text: "If a match is not found using the coalesce fields, the system does not create a Transform Map"},
            {val: "C", text: "If a match is found using the coalesce fields, the system creates a new record"},
            {val: "D", text: "If a match is not found using the coalesce fields, the existing record is updated with the information being imported"},
        ],
        answer: "A"
    },
    {
        q: "As it relates to ServiceNow reporting, which of the following statements describes what a metric can do?",
        options: [
            {val: "A", text: "A metric is a report gauge used on homepages to display real-time data"},
            {val: "B", text: "A metric is a time measurement used to report the effectiveness of workflows and SLAs"},
            {val: "C", text: "A metric is used to measure and evaluate the effectiveness of IT service management processes"},
            {val: "D", text: "A metric is a comparative measurement used to report the effectiveness of flows and SLAs"},
        ],
        answer: "C"
    },
    {
        q: "The display sequence is controlled in a Service Catalog Item using which of the following?",
        options: [
            {val: "A", text: "The Default Value field in the Catalog Item form"},
            {val: "B", text: "The Sequence field in the Catalog Item form"},
            {val: "C", text: "The Order field in the Variable form"},
            {val: "D", text: "The Choice field in the Variable form"},
        ],
        answer: "C"
    },
    {
        q: "Reports can be created from which different places in the platform? (Choose two.)",
        options: [
            {val: "A", text: "List column heading"},
            {val: "B", text: "Metrics module"},
            {val: "C", text: "Statistics module"},
            {val: "D", text: "View / Run module"},
        ],
        answer: "A,D"
    },
    {
        q: "Knowledge Base Search results can be sorted by which of the following? (Choose three.)",
        options: [
            {val: "A", text: "Most recent update"},
            {val: "B", text: "Popularity"},
            {val: "C", text: "Relevancy"},
            {val: "D", text: "Manager assignment"},
            {val: "E", text: "Number of views"},
        ],
        answer: "A,C,E"
    },
    {
        q: "What is the path an Administrator could take to view the fulfillment stage task list for an order placed by a user?",
        options: [
            {val: "A", text: "RITM (Number)>REQ (Number)>PROCUREMENT (Number)"},
            {val: "B", text: "REQ (Number)>RITM (Number)>PROCUREMENT (Number)"},
            {val: "C", text: "REQ (Number)>RITM (Number)>TASK (Number)"},
            {val: "D", text: "FULFILLMENT (Number)>RITM (Number)>TASK (Number)"},
        ],
        answer: "C"
    },
    {
        q: "Which term refers to application menus and modules which you may want to access quickly and often?",
        options: [
            {val: "A", text: "Breadcrumb"},
            {val: "B", text: "Favorite"},
            {val: "C", text: "Tag"},
            {val: "D", text: "Bookmark"},
        ],
        answer: "B"
    },
    {
        q: "What is generated from the Service Catalog once a user places an order for an item or service?",
        options: [
            {val: "A", text: "A change request"},
            {val: "B", text: "An Order Guide"},
            {val: "C", text: "A request"},
            {val: "D", text: "An SLA"},
        ],
        answer: "C"
    },
    {
        q: "From the User menu, which actions can a user select? (Choose three.)",
        options: [
            {val: "A", text: "Send Notifications"},
            {val: "B", text: "Log Out ServiceNow"},
            {val: "C", text: "Elevate Roles"},
            {val: "D", text: "Impersonate Users"},
            {val: "E", text: "Order from Service Catalog"},
            {val: "F", text: "Approve Records"},
        ],
        answer: "B,C,D"
    },
    {
        q: "Buttons, form links, and context menu items are all examples of what type of functionality?",
        options: [
            {val: "A", text: "Business Rule"},
            {val: "B", text: "UI Action"},
            {val: "C", text: "Client Script"},
            {val: "D", text: "UI Policy"},
        ],
        answer: "B"
    },
    {
        q: "Which of the following is true of Service Catalog Items in relation to the Service Catalog?",
        options: [
            {val: "A", text: "They run behind the scenes."},
            {val: "B", text: "They are the building blocks."},
            {val: "C", text: "They are optional."},
            {val: "D", text: "They provide options."},
        ],
        answer: "B"
    },
    {
        q: "Table Access Control rules are processed in the following order:",
        options: [
            {val: "A", text: "any table name (wildcard), parent table name, table name"},
            {val: "B", text: "table name, parent table name, any table name (wildcard)"},
            {val: "C", text: "parent table name, table name, any table name (wildcard)"},
            {val: "D", text: "any table name (wildcard), table name, parent table name"},
        ],
        answer: "B"
    },
    {
        q: "What is the platform name for the User table?",
        options: [
            {val: "A", text: "u_users"},
            {val: "B", text: "sys_users"},
            {val: "C", text: "x_users"},
            {val: "D", text: "sys_user"},
        ],
        answer: "D"
    },
    {
        q: "A REQ number in the Service Catalog represents...",
        options: [
            {val: "A", text: "the order number."},
            {val: "B", text: "the stage."},
            {val: "C", text: "the task to complete."},
            {val: "D", text: "the individual item in the order."},
        ],
        answer: "A"
    },
    {
        q: "Which would NOT appear in the History section of the Application Navigator?",
        options: [
            {val: "A", text: "Records"},
            {val: "B", text: "UI Pages"},
            {val: "C", text: "Lists"},
            {val: "D", text: "Forms"},
        ],
        answer: "B"
    },
    {
        q: "Which one of the following statements is a recommendation from ServiceNow about Update Sets?",
        options: [
            {val: "A", text: "Avoid using the Default Update set as an Update Set for moving customizations from instance to instance"},
            {val: "B", text: "Before moving customizations from instance to instance with Update Sets, ensure that both instances are different versions"},
            {val: "C", text: "Use the Baseline Update Set to store the contents of items after they are changed the first time"},
            {val: "D", text: "Once an Update Set is closed as 'Complete', change it back to 'In Progress' until it is applied to another instance"},
        ],
        answer: "A"
    },
    {
        q: "Which of the following is used to initiate a flow?",
        options: [
            {val: "A", text: "A Trigger"},
            {val: "B", text: "Core Action"},
            {val: "C", text: "A spoke"},
            {val: "D", text: "An Event"},
        ],
        answer: "A"
    },
    {
        q: "For Administrators creating new Service Catalog items, what is a characteristic they should know about Service Catalog variables?",
        options: [
            {val: "A", text: "Service Catalog variables can only be used in Record Producers"},
            {val: "B", text: "Service Catalog variables can only be used in Order Guides"},
            {val: "C", text: "Service Catalog variables cannot affect the order price"},
            {val: "D", text: "Service Catalog variables are global by default"},
        ],
        answer: "D"
    },
    {
        q: "Which one of the following statements is true about Column Context Menus?",
        options: [
            {val: "A", text: "It displays actions such as creating quick reports, configuring the list, and exporting data"},
            {val: "B", text: "It displays actions related to filtering options, assigning tags, and search"},
            {val: "C", text: "It displays actions related to viewing and filtering the entire list"},
            {val: "D", text: "It displays actions such as view form, view related task, and add relationship"},
        ],
        answer: "A"
    },
    {
        q: "Which ServiceNow products can be used to discover and populate the CMDB? (Choose two.)",
        options: [
            {val: "A", text: "Discovery"},
            {val: "B", text: "IntegrationHub ETL"},
            {val: "C", text: "Finder"},
            {val: "D", text: "CMDB Plug-in"},
            {val: "E", text: "CMDB Integration Dashboard"},
        ],
        answer: "A,B"
    },
    {
        q: "When using the Load Data and Transform Map process, what is the Mapping Assist used for?",
        options: [
            {val: "A", text: "Mapping fields using the Import Log"},
            {val: "B", text: "Mapping fields using Transform History"},
            {val: "C", text: "Mapping fields using an SLA"},
            {val: "D", text: "Mapping fields using a Field Map"},
        ],
        answer: "D"
    },
    {
        q: "Which one of the following statements describes the contents of the Configuration Management Database (CMDB)?",
        options: [
            {val: "A", text: "The CMDB contains data about tangible and intangible business assets"},
            {val: "B", text: "The CMDB contains the Business Rules that direct the intangible, configurable assets used by a company"},
            {val: "C", text: "The CMDB archives all Service Management PaaS equipment metadata and usage statistics"},
            {val: "D", text: "The CMDB contains ITIL process data pertaining to configuration items"},
        ],
        answer: "A"
    },
    {
        q: "In what order should filter elements be specified?",
        options: [
            {val: "A", text: "Field, Operator, then Value"},
            {val: "B", text: "Field, Operator, then Condition"},
            {val: "C", text: "Operator, Condition, then Value"},
            {val: "D", text: "Value, Operator, then Field"},
        ],
        answer: "A"
    },
    {
        q: "Which statement is true about business rules?",
        options: [
            {val: "A", text: "A business rule must run before a database action occurs"},
            {val: "B", text: "A business rule can be a piece of Javascript"},
            {val: "C", text: "A business rule must not run before a database action occurs"},
            {val: "D", text: "A business rule monitors fields on a form"},
        ],
        answer: "B"
    },
    {
        q: "Which of the following are a type of client scripts supported in ServiceNow? (Choose four.)",
        options: [
            {val: "A", text: "onSubmit"},
            {val: "B", text: "onUpdate"},
            {val: "C", text: "onCellEdit"},
            {val: "D", text: "onLoad"},
            {val: "E", text: "onEdit"},
            {val: "F", text: "onChange"},
            {val: "G", text: "onSave"},
        ],
        answer: "A,C,D,F"
    },
    {
        q: "Which type of tables may be extended by other tables, but do not extend another table?",
        options: [
            {val: "A", text: "Base Tables"},
            {val: "B", text: "Core Tables"},
            {val: "C", text: "Extended Tables"},
            {val: "D", text: "Custom Tables"},
        ],
        answer: "A"
    },
    {
        q: "Which of the following statement describes the purpose of an Order Guide?",
        options: [
            {val: "A", text: "Order Guides restrict the number of items in an order to only one item per request"},
            {val: "B", text: "Order Guide provide a list of guidelines for Administrators on how to set up item variables"},
            {val: "C", text: "Order Guide provide the ability to order multiple, related items as one request"},
            {val: "D", text: "Order Guides take the user directly to the checkout without prompting for information"},
        ],
        answer: "C"
    },
    {
        q: "Which tool is used to have conversations with logged-in users in real-time?",
        options: [
            {val: "A", text: "Connect Chat"},
            {val: "B", text: "Now Messenger"},
            {val: "C", text: "User Presence"},
            {val: "D", text: "Comments"},
        ],
        answer: "A"
    },
    {
        q: "Which of the following concepts are associated with the ServiceNow CMDB? (Choose four.)",
        options: [
            {val: "A", text: "Service Processes"},
            {val: "B", text: "User Permissions"},
            {val: "C", text: "Tables and Fields"},
            {val: "D", text: "A Database"},
            {val: "E", text: "The Dependency View"},
        ],
        answer: "A,C,D,E"
    },
    {
        q: "What is a formatter? Select one of the following.",
        options: [
            {val: "A", text: "A formatter allows you to configure applications on your instance"},
            {val: "B", text: "A formatter is a form element used to display information that is not a field in the record"},
            {val: "C", text: "A formatter allows you to populate fields automatically"},
            {val: "D", text: "A formatter is a set of conditions applied to a table to help find and work with data"},
        ],
        answer: "B"
    },
    {
        q: "When searching using the App Navigator search field, what can be returned? (Choose four.)",
        options: [
            {val: "A", text: "Names of Applications and Modules"},
            {val: "B", text: "Names of Modules"},
            {val: "C", text: "Names of Applications"},
            {val: "D", text: "Favorites"},
            {val: "E", text: "History Records"},
            {val: "F", text: "Titles of Dashboard Gauges"},
        ],
        answer: "A,B,C,D"
    },
    {
        q: "Which technique is used to get information from a series of referenced fields from different tables?",
        options: [
            {val: "A", text: "Table-Walking"},
            {val: "B", text: "Sys_ID Pulling"},
            {val: "C", text: "Dot-Walking"},
            {val: "D", text: "Record-Hopping"},
        ],
        answer: "C"
    },
    {
        q: "What is a schema map?",
        options: [
            {val: "A", text: "A schema map enables administrators to define records from specific tables as trouble sources for Configuration Items"},
            {val: "B", text: "A schema map graphically organizes the visual task boards for the CMDB"},
            {val: "C", text: "A schema map graphically displays the Configuration Items that support a business service"},
            {val: "D", text: "A schema map displays the details of tables and their relationships in a visual manner, allowing administrators to view and easily access different parts of the database schema"},
        ],
        answer: "D"
    },
    {
        q: "Which one of the following statements best describes the purpose of an Update Set?",
        options: [
            {val: "A", text: "An Update Set allows administrators to group a series of changes into a named set and then move this set as a unit to other systems"},
            {val: "B", text: "By default, an Update Set includes customizations, Business Rules, and homepages"},
            {val: "C", text: "An Update Set is a group of customizations that is moved from Production to Development"},
            {val: "D", text: "By default, the changes included in an Update Set are visible only in the instance to which they are applied"},
        ],
        answer: "A"
    },
    {
        q: "Which of the following can be customized through the Basic Configuration UI 16 module? (Choose three.)",
        options: [
            {val: "A", text: "Banner Image"},
            {val: "B", text: "Record Number Format"},
            {val: "C", text: "Browser Tab Title"},
            {val: "D", text: "System Date Format"},
            {val: "E", text: "Form Header Size"},
        ],
        answer: "A,C,D"
    },
    {
        q: "What is the function of user impersonation?",
        options: [
            {val: "A", text: "Testing and visibility"},
            {val: "B", text: "Activate verbose logging"},
            {val: "C", text: "View custom perspectives"},
            {val: "D", text: "Unlock Application master list"},
        ],
        answer: "A"
    },
    {
        q: "What information does the System Dictionary contain?",
        options: [
            {val: "A", text: "The human-readable labels and language settings"},
            {val: "B", text: "The definition for each table and column"},
            {val: "C", text: "The information on how tables relate to each other"},
            {val: "D", text: "The language dictionary used for spell checking"},
        ],
        answer: "B"
    },
    {
        q: "When working on a form, what is the difference between Insert and Update operations?",
        options: [
            {val: "A", text: "Insert creates a new record and Update saves changes, both remain on the form"},
            {val: "B", text: "Insert creates a new record and Update saves changes, both exit the form"},
            {val: "C", text: "Insert saves changes and exits the form, Update saves changes and remains on the form"},
            {val: "D", text: "Insert saves changes and remains on the form, Update saves changes and exits the form"},
        ],
        answer: "B"
    },
    {
        q: "How is the Event Log different from the Event Registry?",
        options: [
            {val: "A", text: "Event Log contains generated Events, the Event Registry is a table of Event definitions"},
            {val: "B", text: "Event Log is formatted in the Log style, the Event Registry displays different fields"},
            {val: "C", text: "Event Log lists Events that were triggered by integrations, the Event Registry lists the Events that were triggered during the day (24-hour period)"},
            {val: "D", text: "Event Log is the same as the Event Registry"},
        ],
        answer: "A"
    },
    {
        q: "What is a Dictionary Override?",
        options: [
            {val: "A", text: "A Dictionary Override is an incoming customer update in an Update Set which applies to the same objects as a newer local customer update"},
            {val: "B", text: "A Dictionary Override is the addition, modification, or removal of anything that could have an effect on IT services"},
            {val: "C", text: "A Dictionary Override is a task within a flow that requests an action before the flow can continue"},
            {val: "D", text: "A Dictionary Override sets field properties in extended tables"},
        ],
        answer: "D"
    },
    {
        q: "Which group of permissions is used to control Application and Module access?",
        options: [
            {val: "A", text: "Access Control Rules"},
            {val: "B", text: "UI Policies"},
            {val: "C", text: "Roles"},
            {val: "D", text: "Assignment Rules"},
        ],
        answer: "C"
    },
    {
        q: "What is a Record Producer?",
        options: [
            {val: "A", text: "A Record Producer is a type of Catalog Item that is used for Requests, not Services"},
            {val: "B", text: "A Record Producer creates user records"},
            {val: "C", text: "A Record Producer is a type of Catalog Item that provides easy ordering by bundling requests"},
            {val: "D", text: "A Record Producer is a type of a Catalog Item that allows users to create task-based records from the Service Catalog"},
        ],
        answer: "D"
    },
    {
        q: "Create Incident, Password Reset, and Report outage: what do these services in the Service Catalog have in common?",
        options: [
            {val: "A", text: "They direct the user to a record producer"},
            {val: "B", text: "They direct the user to a catalog property"},
            {val: "C", text: "They direct the user to a catalog UI policy"},
            {val: "D", text: "They direct the user to a catalog client script"},
        ],
        answer: "A"
    },
    {
        q: "What is the Import Set Table?",
        options: [
            {val: "A", text: "A table where data will be placed, post-transformation"},
            {val: "B", text: "A table that determines relationships"},
            {val: "C", text: "A staging area for imported records"},
            {val: "D", text: "A repository for Update Set information"},
        ],
        answer: "C"
    },
    {
        q: "What is a characteristic of importing data into ServiceNow?",
        options: [
            {val: "A", text: "An existing Transform Map can be used one time on the same import set"},
            {val: "B", text: "Coalesce fields are used only after running Transform"},
            {val: "C", text: "Any user can manage and set up import sets"},
            {val: "D", text: "An existing Transform Map can be used multiple times on the same import set"},
        ],
        answer: "D"
    },
    {
        q: "What module in the Service Catalog application does an Administrator access to begin creating a new item?",
        options: [
            {val: "A", text: "Maintain Categories"},
            {val: "B", text: "Maintain Items"},
            {val: "C", text: "Content Items"},
            {val: "D", text: "Items"},
        ],
        answer: "B"
    },
    {
        q: "Which of the following allows a user to edit field values in a list without opening the form?",
        options: [
            {val: "A", text: "Data Editor"},
            {val: "B", text: "Edit Menu"},
            {val: "C", text: "List Editor"},
            {val: "D", text: "Form Designer"},
        ],
        answer: "C"
    },
    {
        q: "Which three Variable Types can be added to a Service Catalog Item?",
        options: [
            {val: "A", text: "True/False, Multiple Choice, and Ordered"},
            {val: "B", text: "True/False, Checkbox, and Number List"},
            {val: "C", text: "Number List, Single Line Text, and Reference"},
            {val: "D", text: "Multiple Choice, Select Box, and Checkbox"},
        ],
        answer: "D"
    },
    {
        q: "How are Workflows moved between instances?",
        options: [
            {val: "A", text: "Workflows are moved using Update Sets"},
            {val: "B", text: "Workflows are moved using Transform Maps"},
            {val: "C", text: "Workflows are moved using Application Sets"},
            {val: "D", text: "Workflows cannot be moved between instances"},
        ],
        answer: "A"
    },
    {
        q: "The baseline Service Catalog homepage contains links to which of the following components?",
        options: [
            {val: "A", text: "Record Producers, Order Guides, and Catalog Items"},
            {val: "B", text: "Order Guides, Item Variables, and flows"},
            {val: "C", text: "Order Guides, Catalog Items, and flows"},
            {val: "D", text: "Record Producers, Order Guides, and Item Variables"},
        ],
        answer: "A"
    },
    {
        q: "Which of the following statements is true when a new table is created by extending another table?",
        options: [
            {val: "A", text: "The new table archives the parent table and assumed its roles in the database"},
            {val: "B", text: "The new table inherits all of the Business Rules, Client Scripts, and UI Policies of the parent table, but none of the existing fields"},
            {val: "C", text: "The new table inherits all of the fields of the parent table and can also contain new fields unique to itself"},
            {val: "D", text: "The new table inherits all of the fields, but does not inherit Access Control rules, Client Scripts, and UI Policies of the parent table"},
        ],
        answer: "C"
    },
    {
        q: "Where can Admins check which release is running on a ServiceNow instance?",
        options: [
            {val: "A", text: "Memory Stats module"},
            {val: "B", text: "Stats module"},
            {val: "C", text: "System.upgraded table"},
            {val: "D", text: "Transactions log"},
        ],
        answer: "B"
    },
    {
        q: "A knowledge article must be which of the following states to display to a user?",
        options: [
            {val: "A", text: "Published"},
            {val: "B", text: "Drafted"},
            {val: "C", text: "Retired"},
            {val: "D", text: "Reviewed"},
        ],
        answer: "A"
    },
    {
        q: "What is the name of the conversational bot platform that provides assistance to help users obtain information, make decisions, and perform common tasks?",
        options: [
            {val: "A", text: "Answer Agent"},
            {val: "B", text: "Live Feed"},
            {val: "C", text: "Virtual Agent"},
            {val: "D", text: "Connect Chat"},
        ],
        answer: "C"
    },
    {
        q: "What is the purpose of a Related List?",
        options: [
            {val: "A", text: "To create a one-to-many relationship"},
            {val: "B", text: "To dot-walk to a core table"},
            {val: "C", text: "To present related fields"},
            {val: "D", text: "To present related records"},
        ],
        answer: "D"
    },
    {
        q: "Which one of the following statements describes the purpose of a Service Catalog flow?",
        options: [
            {val: "A", text: "A Service Catalog flow generates three basic components: item variable types, tasks, and approvals"},
            {val: "B", text: "Although a Service Catalog flow cannot send notifications, the flow drives complex fulfillment processes"},
            {val: "C", text: "A Service Catalog flow is used to drive complex fulfillment processes and sends notifications to defined users or groups"},
            {val: "D", text: "A Service Catalog flow generates three basic components: item variable types, tasks, and notifications"},
        ],
        answer: "C"
    },
    {
        q: "Which term best describes something that is created, has worked performed upon it, and is eventually moved to a state of closed?",
        options: [
            {val: "A", text: "Report"},
            {val: "B", text: "Flow"},
            {val: "C", text: "Event"},
            {val: "D", text: "Task"},
        ],
        answer: "D"
    },
    {
        q: "Which are valid ServiceNow User Authentication Methods? (Choose three.)",
        options: [
            {val: "A", text: "XML feed"},
            {val: "B", text: "Local database"},
            {val: "C", text: "LDAP"},
            {val: "D", text: "SSO"},
            {val: "E", text: "FTP authentication"},
        ],
        answer: "B,C,D"
    },
    {
        q: "Access Control rules may be defined with which of the following permission requirements? (Choose three.)",
        options: [
            {val: "A", text: "Roles"},
            {val: "B", text: "Conditional Expressions"},
            {val: "C", text: "Assignment Rules"},
            {val: "D", text: "Scripts"},
            {val: "E", text: "User Criteria"},
            {val: "F", text: "Groups"},
        ],
        answer: "A,B,D"
    },
    {
        q: "Which section of the ServiceNow UI allows you to perform a global search?",
        options: [
            {val: "A", text: "Application Navigator"},
            {val: "B", text: "Banner frame"},
            {val: "C", text: "List pane"},
            {val: "D", text: "Content frame"},
        ],
        answer: "B"
    },
    {
        q: "How do you make a list filter available to everyone?",
        options: [
            {val: "A", text: "Make active, assign a name, and save"},
            {val: "B", text: "Assign a group, set visibility, and save"},
            {val: "C", text: "Assign a name, set visibility, and save"},
            {val: "D", text: "Make active, set visibility, and save"},
        ],
        answer: "C"
    },
    {
        q: "What would NOT appear in the Application Navigator if 'service' is typed into the filter field?",
        options: [
            {val: "A", text: "Configuration > Business Services"},
            {val: "B", text: "Self-Service > Knowledge"},
            {val: "C", text: "Service Portal > Widgets"},
            {val: "D", text: "Incident > Assigned to me"},
        ],
        answer: "D"
    },
    {
        q: "Which of the following is used to categorize, flag, and locate records?",
        options: [
            {val: "A", text: "Search"},
            {val: "B", text: "Favorites"},
            {val: "C", text: "Tags"},
            {val: "D", text: "Bookmarks"},
        ],
        answer: "C"
    },
    {
        q: "Which tool should be used to populate commonly used fields in a form?",
        options: [
            {val: "A", text: "Template"},
            {val: "B", text: "Reference Qualifier"},
            {val: "C", text: "Formatter"},
            {val: "D", text: "Assignment Rule"},
        ],
        answer: "A"
    },
    {
        q: "How is a group defined in ServiceNow?",
        options: [
            {val: "A", text: "A group is one record stored in the Group Type [sys_user_group_type] table"},
            {val: "B", text: "A group is one record stored in the Group [sys_user_group] table"},
            {val: "C", text: "A group defines a set of users that share the same location"},
            {val: "D", text: "A group defines a set of users that share the same job title"},
        ],
        answer: "B"
    },
    {
        q: "What is a role in ServiceNow?",
        options: [
            {val: "A", text: "A role is one record in the Role [user_sys_role] table"},
            {val: "B", text: "A role is a set of modules for a particular application"},
            {val: "C", text: "A role is one record in the Role [sys_user_role] table"},
            {val: "D", text: "A role is a persona used in Live Feed Chat"},
        ],
        answer: "C"
    },
    {
        q: "What is a Notification?",
        options: [
            {val: "A", text: "A new Knowledge article created by a Business Rule"},
            {val: "B", text: "A tool for alerting users that events that concern them have occurred"},
            {val: "C", text: "A message through Connect related to a Change Request"},
            {val: "D", text: "An email file attachment"},
        ],
        answer: "B"
    },
    {
        q: "Which one of the following is NOT a type of Visual Task Board?",
        options: [
            {val: "A", text: "Flexible"},
            {val: "B", text: "Freeform"},
            {val: "C", text: "Feature"},
            {val: "D", text: "Guided boards"},
        ],
        answer: "C"
    },
    {
        q: "What is (are) best practice(s) regarding users/groups/roles? (Choose two.)",
        options: [
            {val: "A", text: "You should never assign roles to groups."},
            {val: "B", text: "You should assign roles to users."},
            {val: "C", text: "You should add users to groups."},
            {val: "D", text: "You should assign roles to groups."},
        ],
        answer: "C,D"
    },
    {
        q: "What are two ways to generate an Event? (Choose two.)",
        options: [
            {val: "A", text: "Business Rule"},
            {val: "B", text: "Workflow"},
            {val: "C", text: "Log entry"},
            {val: "D", text: "Knowledge article publication"},
        ],
        answer: "A,B"
    },
    {
        q: "Which core table in the ServiceNow platform provides a series of standard fields used on each of the tables that extend it, such as the Incident [incident] and Problem [problem] tables?",
        options: [
            {val: "A", text: "Task [task]"},
            {val: "B", text: "Assignment [assignment]"},
            {val: "C", text: "Service [service]"},
            {val: "D", text: "Workflow [workflow]"},
        ],
        answer: "A"
    },
    {
        q: "Which of the following statements describes how data is organized in a table?",
        options: [
            {val: "A", text: "A column is a field in the database and a record is one user"},
            {val: "B", text: "A column is one field and a record is one row"},
            {val: "C", text: "A column is one field and a record is one column"},
            {val: "D", text: "A column contains data from one user and a record is one set of fields"},
        ],
        answer: "B"
    },
    {
        q: "What is a sys_id?",
        options: [
            {val: "A", text: "Unique 32-character identifier that is assigned to every record"},
            {val: "B", text: "A client-side Business Rule"},
            {val: "C", text: "A server-side Business Rule"},
            {val: "D", text: "Unique 64-character identifier that is assigned to every record"},
        ],
        answer: "A"
    },
    {
        q: "When creating a global custom table named `abc`, what is the table name that is automatically assigned by the platform?",
        options: [
            {val: "A", text: "snc_abc"},
            {val: "B", text: "abc"},
            {val: "C", text: "u_abc"},
            {val: "D", text: "sys_abc"},
        ],
        answer: "C"
    },
    {
        q: "Access Control rules may provide access security for which of the following database objects?",
        options: [
            {val: "A", text: "For a specific role, group, or user"},
            {val: "B", text: "For a specific row, column, or table"},
            {val: "C", text: "For specific groups"},
            {val: "D", text: "For a specific CMDB Configuration item"},
        ],
        answer: "B"
    },
    {
        q: "What is the primary application used to load data into ServiceNow?",
        options: [
            {val: "A", text: "Service Level Management"},
            {val: "B", text: "Configuration"},
            {val: "C", text: "System Import Sets"},
            {val: "D", text: "System Update Sets"},
        ],
        answer: "C"
    },
    {
        q: "Which of the following steps can be used to import new data into ServiceNow from a spreadsheet?",
        options: [
            {val: "A", text: "Select Data Source, Schedule Transform"},
            {val: "B", text: "Load Data, Create Transform Map, Run Transform"},
            {val: "C", text: "Define Data Source, Select Transform Map, Run Transform"},
            {val: "D", text: "Select Import Set, Select Transform Map, Run Transform"},
        ],
        answer: "B"
    },
    {
        q: "Which tool is used for creating dependencies between configuration items in the CMDB?",
        options: [
            {val: "A", text: "CI Relationship Editor"},
            {val: "B", text: "CMDB Builder"},
            {val: "C", text: "CI Service Manager"},
            {val: "D", text: "Cl Class Manager"},
        ],
        answer: "A"
    },
    {
        q: "What is the difference between a UI Policy and Data Policy?",
        options: [
            {val: "A", text: "Data Policies run when data is entered through the form, by an Import Set, or by web services, while UI Policies are set only by web services"},
            {val: "B", text: "Data Policies can be converted into UI Policies, but UI Policies cannot be converted into Data Policies"},
            {val: "C", text: "Data Policies run regardless of how data is entered into ServiceNow, while UI Policies are used for form interactions"},
            {val: "D", text: "Data Policies run only after UI Policies run successfully"},
        ],
        answer: "C"
    },
    {
        q: "Which one of the following is an accurate list of changes that are captured in an Update Set?",
        options: [
            {val: "A", text: "Changes made to: tables, forms, schedules, and client scripts"},
            {val: "B", text: "Changes made to: tables, forms, Business Rules, and data records"},
            {val: "C", text: "Changes made to: tables, forms, groups, and configuration items (CIs)"},
            {val: "D", text: "Changes made to: table, forms, views, and fields"},
        ],
        answer: "D"
    },
    {
        q: "What are the steps to retrieve an Update Set?",
        options: [
            {val: "A", text: "Verify Update Set is Complete, Retrieve, Preview, Apply"},
            {val: "B", text: "Verify Update Set is Complete, Test Connection, Apply"},
            {val: "C", text: "Verify Update Set is Complete, Test Connection, Commit"},
            {val: "D", text: "Verify Update Set is Complete, Retrieve, Preview, Commit"},
        ],
        answer: "D"
    },
    {
        q: "IntegrationHub enables execution of third-party APIs as a part of a flow. These integrations are referred to as",
        options: [
            {val: "A", text: "an action"},
            {val: "B", text: "a spoke"},
            {val: "C", text: "a connection"},
            {val: "D", text: "an integration step"},
        ],
        answer: "B"
    },
    {
        q: "Which of the following protects applications by identifying and restricting access to available files and data?",
        options: [
            {val: "A", text: "Application Configuration"},
            {val: "B", text: "Verbose Log"},
            {val: "C", text: "Access Control Rules"},
            {val: "D", text: "Application Scope"},
        ],
        answer: "D"
    },
    {
        q: "Which one statement correctly describes Access Control rule evaluation?",
        options: [
            {val: "A", text: "Table access rules are evaluated from the general to the specific"},
            {val: "B", text: "If more than one rule applies to a record, the older rule is evaluated first"},
            {val: "C", text: "If a row level rule and a field level rule exist, both rules must be true before an operation is allowed"},
            {val: "D", text: "The role with the most permissions evaluates the rules first"},
        ],
        answer: "C"
    },
    {
        q: "ServiceNow contains a resource which provides the following:  ✑ A standard and shared set of service related definitions across ServiceNow products and platform that will enable and support true service level reporting. ✑ A CMDB framework across our products and platform that will enable and support multiple configuration strategies. What resource do these statements describe?",
        options: [
            {val: "A", text: "Common Services Data Model (CSDM)"},
            {val: "B", text: "Information Technology Service Management (ITSM)"},
            {val: "C", text: "Configuration Management Database (CMDB)"},
            {val: "D", text: "Information Technology Infrastructure Library (ITIL)"},
        ],
        answer: "A"
    },
    {
        q: "An IT manager is responsible for the Network and Hardware assignment groups, each group contains 5 team members. These team members are working on many tasks, but the manager cannot see any tasks on the Service Desk > My Groups Work list. What could explain this?",
        options: [
            {val: "A", text: "The Service Desk > My Groups Work list shows active work tasks that are not yet assigned."},
            {val: "B", text: "The manager does not have the itil role."},
            {val: "C", text: "The manager is not a member of the Service Desk group."},
            {val: "D", text: "The manager is not a member of the Network and Hardware groups."},
            {val: "E", text: "The Assignment Group manager field is empty."},
        ],
        answer: "D"
    },
    {
        q: "What do you need to do before you can use an Application-based trigger in your flow?",
        options: [
            {val: "A", text: "Activate application trigger spoke"},
            {val: "B", text: "Activate trigger security rules"},
            {val: "C", text: "Activate application spoke, and plug-ins as needed"},
            {val: "D", text: "Assign Application trigger role [sn_app_trigger_write] to SME"},
            {val: "E", text: "Activate application plugins only"},
        ],
        answer: "C"
    },
    {
        q: "The ServiceNow platform includes which types of interfaces? (Choose three.)",
        options: [
            {val: "A", text: "Now Mobile Apps"},
            {val: "B", text: "Agent Control Center"},
            {val: "C", text: "Back Office Dashboard"},
            {val: "D", text: "Service Portals"},
            {val: "E", text: "Now Platform® User Interfaces"},
            {val: "F", text: "Field Service Taskboard"},
        ],
        answer: "A,D,E"
    },
    {
        q: "Which of the following are not included in an Update Set, by default? (Choose four.)",
        options: [
            {val: "A", text: "Homepages"},
            {val: "B", text: "Data"},
            {val: "C", text: "Published Workflows"},
            {val: "D", text: "Business Rules"},
            {val: "E", text: "Schedules"},
            {val: "F", text: "Database changes"},
            {val: "G", text: "Related Lists"},
            {val: "H", text: "Report Definitions"},
            {val: "I", text: "Scheduled Jobs"},
            {val: "J", text: "Client Scripts"},
            {val: "K", text: "Views"},
        ],
        answer: "B,E,F,I"
    },
    {
        q: "You are showing your customer a new form that you have created for their new application. They would like to add a field to the form. Where could you do that? (Choose two.)",
        options: [
            {val: "A", text: "Select Fields and Columns module"},
            {val: "B", text: "Right click on form header, select Configure > Form Layout"},
            {val: "C", text: "Click on context menu, select Configure > Form Designer"},
            {val: "D", text: "Select Field Class Manager module"},
        ],
        answer: "B,C"
    },
    {
        q: "Which ServiceNow resource is a framework that ensures the data your ServiceNow application requires maps correctly to the appropriate CMDB tables?",
        options: [
            {val: "A", text: "Common Service Data Model (CSDM)"},
            {val: "B", text: "Service Mapping Utility (SMU)"},
            {val: "C", text: "Service Schema Map (SSM)"},
            {val: "D", text: "CMDB Class Manager (CMDBCM)"},
            {val: "E", text: "CI Class Manager (CICM)"},
        ],
        answer: "A"
    },
    {
        q: "What do you activate when you want to add applications or functionality within your development instance?",
        options: [
            {val: "A", text: "App Package"},
            {val: "B", text: "Updated Pack"},
            {val: "C", text: "Patch"},
            {val: "D", text: "Plugin"},
            {val: "E", text: "App Updated Set"},
        ],
        answer: "D"
    },
    {
        q: "What field contains a record's 32-character, unique identifier?",
        options: [
            {val: "A", text: "sn_rec_id"},
            {val: "B", text: "rec_id"},
            {val: "C", text: "u_id"},
            {val: "D", text: "sys_id"},
            {val: "E", text: "sn_gu_id"},
            {val: "F", text: "sn_sys_id"},
            {val: "G", text: "id"},
        ],
        answer: "D"
    },
    {
        q: "Your company is giving all first line workers a special T-shirt as a recognition for their hard work. Management team wants a way for employees to order the T-shirt, with the ability to specify the preferred size and color. How would you ensure that only first line workers (non-managers) can submit the order?",
        options: [
            {val: "A", text: "Create Record Producer and use the Available For list to specify First Line [sn_first_line] role"},
            {val: "B", text: "Create Catalog Item and use the Not Available list to specify the Manager Group"},
            {val: "C", text: "Create Catalog Item and use the Available For list to specify ITIL [itil] role"},
            {val: "D", text: "Create Order Guide and use the User Criteria list to specify First Line [sn_first_line] role"},
        ],
        answer: "B"
    },
    {
        q: "What is used frequently to move customizations from one instance to another?",
        options: [
            {val: "A", text: "Update Sets"},
            {val: "B", text: "Code Sets"},
            {val: "C", text: "Update Packs"},
            {val: "D", text: "Configuration Logs"},
            {val: "E", text: "Remote Sets"},
            {val: "F", text: "Local Sets"},
            {val: "G", text: "Code Packs"},
        ],
        answer: "A"
    },
    {
        q: "What icon do you use to change the label on a Favorite?",
        options: [
            {val: "A", text: "Clock"},
            {val: "B", text: "Hamburger"},
            {val: "C", text: "Pencil"},
            {val: "D", text: "Three dots"},
            {val: "E", text: "Triangle"},
            {val: "F", text: "Star"},
        ],
        answer: "C"
    },
    {
        q: "What needs to be specified, when creating a Business Rule? (Choose four.)",
        options: [
            {val: "A", text: "UI action"},
            {val: "B", text: "Table"},
            {val: "C", text: "Fields to update"},
            {val: "D", text: "Who can run"},
            {val: "E", text: "Script to run"},
            {val: "F", text: "Application scope"},
            {val: "G", text: "Update set"},
            {val: "H", text: "Timing"},
            {val: "I", text: "Condition to evaluate"},
        ],
        answer: "B,E,H,I"
    },
    {
        q: "What feature can track the amount of time that a task has been open, to ensure that tasks are completed within an allotted time?",
        options: [
            {val: "A", text: "Task Escalation Clock"},
            {val: "B", text: "Service Level Agreements"},
            {val: "C", text: "Inactivity Monitor"},
            {val: "D", text: "Response Time Clock"},
            {val: "E", text: "Business Time Remaining"},
        ],
        answer: "B"
    },
    {
        q: "What is a quick way to create a report from a list view?",
        options: [
            {val: "A", text: "Click on filter breadcrumb, drag and drop on the Report > Create New module"},
            {val: "B", text: "Click Funnel, define filter conditions, click Create Report"},
            {val: "C", text: "Click Context Menu, select Create Report"},
            {val: "D", text: "Apply filter, right click on column header, select Bar Chart"},
            {val: "E", text: "Apply filter, right click on column header, select Create Report"},
        ],
        answer: "D"
    },
    {
        q: "What import utility do you use when the field names on the import set match the name of the fields on the Target table?",
        options: [
            {val: "A", text: "Schema Mapping"},
            {val: "B", text: "Automatic Mapping"},
            {val: "C", text: "Mapping Assist"},
            {val: "D", text: "Mapping Dashboard"},
        ],
        answer: "B"
    },
    {
        q: "As an IT employee what interface would you use, if you wanted to browse internal IT documentation, like troubleshooting scripts and FAQs?",
        options: [
            {val: "A", text: "Knowledge"},
            {val: "B", text: "ServiceNow Wiki"},
            {val: "C", text: "Knowledge Now"},
            {val: "D", text: "SharePoint"},
            {val: "E", text: "Stack Overflow"},
        ],
        answer: "A"
    },
    {
        q: "A new Service Desk employee in Latin America complains that the create dates and times are incorrect on their Incident list. What would you suggest to fix this issue?",
        options: [
            {val: "A", text: "Have them clear their cache."},
            {val: "B", text: "Have them use the gear icon to set the employee's time zone."},
            {val: "C", text: "Recommend they use Chrome, instead of Explorer."},
            {val: "D", text: "Use the system properties to correct the instance's time zone."},
            {val: "E", text: "Have them correct the time zone on their computer."},
        ],
        answer: "B"
    },
    {
        q: "What are three security modules often used by the System Administrator? (Choose three.)",
        options: [
            {val: "A", text: "System Properties > Security"},
            {val: "B", text: "Utilities > Migrate Security"},
            {val: "C", text: "System Security > Security"},
            {val: "D", text: "Self-Service > My Access"},
            {val: "E", text: "System Security > Access Control (ACL)"},
            {val: "F", text: "Password Management > Security Questions"},
            {val: "G", text: "System Security > High Security Settings"},
        ],
        answer: "A,E,G"
    },
    {
        q: "When testing a catalog item, having a manager approval flows, which of these best practices would you follow? (Choose three.)",
        options: [
            {val: "A", text: "Make sure the latest flows are activated."},
            {val: "B", text: "Use the instance Incognito setting to quickly toggle between requester and approver."},
            {val: "C", text: "Impersonate the requester to ensure the form works."},
            {val: "D", text: "Make sure the requester's user record has a manager specified."},
            {val: "E", text: "Create and select your Testing Update Set, before starting the test cases."},
            {val: "F", text: "Use your Admin account, so you can approve the items quickly."},
        ],
        answer: "A,C,D"
    },
    {
        q: "What is a no-code approach to control the mandatory or read-only state of a form field?",
        options: [
            {val: "A", text: "UI Action"},
            {val: "B", text: "Client Script"},
            {val: "C", text: "UI Script"},
            {val: "D", text: "UI Rule"},
            {val: "E", text: "UI Policy"},
        ],
        answer: "E"
    },
    {
        q: "When moving multiple update sets at one time, what might you do to facilitate the move?",
        options: [
            {val: "A", text: "Batch"},
            {val: "B", text: "Verify"},
            {val: "C", text: "Test"},
            {val: "D", text: "Preview"},
        ],
        answer: "A"
    },
    {
        q: "What is specified in an Access Control rule?",
        options: [
            {val: "A", text: "Groups, Conditional Expressions and Workflows"},
            {val: "B", text: "Table Schema, CRUD, and User Authentication"},
            {val: "C", text: "Object and Operation being secured; Permissions required to access the object"},
            {val: "D", text: "security_admin"},
        ],
        answer: "C"
    },
    {
        q: "Which icon would you double click, to expand and collapse the list of all Applications and Modules?",
        options: [
            {val: "A", text: "Star"},
            {val: "B", text: "Clock"},
            {val: "C", text: "Application"},
            {val: "D", text: "Funnel"},
        ],
        answer: "C"
    },
    {
        q: "What do you call any component that needs to be managed in order to deliver services?",
        options: [
            {val: "A", text: "CSDM Items"},
            {val: "B", text: "CMDB"},
            {val: "C", text: "Configuration item"},
            {val: "D", text: "Service Offerings"},
            {val: "E", text: "Asset"},
        ],
        answer: "C"
    },
    {
        q: "A new service catalog item is being developed, but should only be visible to managers inside the HR Department. What method would you use to fulfill this requirement?",
        options: [
            {val: "A", text: "Specify the Dept_Mgr role on the catalog content block"},
            {val: "B", text: "Add the Department Manager group to the catalog item's user criteria"},
            {val: "C", text: "Add the Department Manager group to the catalog item's ACL"},
            {val: "D", text: "Only publish the item in the HR service catalog"},
            {val: "E", text: "Use a Dept_Mgr ACL on the HR service catalog"},
        ],
        answer: "B"
    },
    {
        q: "A user wants to create a set of filter conditions, where they want to show records which satisfy two conditions: Incidents where the state is Closed; Incidents where Assignment Group is Network. After clicking the Funnel icon, what should the user do?",
        options: [
            {val: "A", text: "Define the first condition; click AND button; define second condition; click Run"},
            {val: "B", text: "Define the first condition; click AND button; define second condition; press enter"},
            {val: "C", text: "Define the first condition; click OR button; define second condition; press enter"},
            {val: "D", text: "Define the first condition; click > icon on breadcrumb, define second condition; click Run"},
            {val: "E", text: "Define the first condition; click > icon on breadcrumb, define second condition; press enter"},
        ],
        answer: "A"
    },
    {
        q: "Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that is specific to the Incident table and the Major Incident field?",
        options: [
            {val: "A", text: "Incident.Major_Incident"},
            {val: "B", text: "incident=>major_incident"},
            {val: "C", text: "incident<=>major_incident"},
            {val: "D", text: "incident||major_incident"},
            {val: "E", text: "incident.major_incident"},
        ],
        answer: "E"
    },
    {
        q: "Two departments (HR Onboarding and Facilities) have come to you, asking for a way for employees to request event room set up services. The requirements are the same for the form and the task routing to the Facilities' assignment group. For HR, the item will be used primarily for the Onboarding coordinators, for employee orientation sessions. For Facilities, the item will be used for anyone in the company who needs room set up services. However, both departments have their own service catalogs. What do you do, to support these requirements?",
        options: [
            {val: "A", text: "Create one Catalog Item for HR Event Room Set Up and one for Facilities Event Room Set Up; then publish each to the appropriate Catalog."},
            {val: "B", text: "Create one Catalog Item for Event Room Set Up; then publish to both Catalogs."},
            {val: "C", text: "Create one Catalog Item for Event Room Set Up; then publish to the Parent Catalog, which is accessible to both HR and Facilities."},
            {val: "D", text: "Create one Catalog Item for Event Room Set Up; then use ACLs to control access."},
        ],
        answer: "B"
    },
    {
        q: "After finishing your work on High Security Settings, what do you do to return to normal admin security levels?",
        options: [
            {val: "A", text: "Select Normal role"},
            {val: "B", text: "Log out and back in"},
            {val: "C", text: "Use System Administration > Normal Security module"},
            {val: "D", text: "Select Global Update Set"},
            {val: "E", text: "End Impersonation"},
        ],
        answer: "B"
    },
    {
        q: "What type of field allows you to look up values from one other table?",
        options: [
            {val: "A", text: "Reference"},
            {val: "B", text: "Verity"},
            {val: "C", text: "Options"},
            {val: "D", text: "Selections"},
            {val: "E", text: "Dot walk"},
            {val: "F", text: "Lookup"},
        ],
        answer: "A"
    },
    {
        q: "Which module would you use to create a new automation of business logic such as approvals, tasks, and notifications?",
        options: [
            {val: "A", text: "Process Automation > Flow Designer"},
            {val: "B", text: "Process Automation > Flow Administration"},
            {val: "C", text: "Process Automation > Workflow Editor"},
            {val: "D", text: "Process Automation > Process Flow"},
            {val: "E", text: "Process Automation > Active Flows"},
        ],
        answer: "A"
    },
    {
        q: "A department manager asks an analyst to build some reports. Where do you recommend the analyst start?",
        options: [
            {val: "A", text: "Report Dashboard > Create New"},
            {val: "B", text: "Reports > Getting Started"},
            {val: "C", text: "Performance Analytics > Reports"},
            {val: "D", text: "Self-Service > Reports"},
            {val: "E", text: "Reports > Create New"},
        ],
        answer: "E"
    },
    {
        q: "What are the steps for applying an update set to an instance?",
        options: [
            {val: "A", text: "Retrieve, Preview, Commit"},
            {val: "B", text: "Specify, Transform, Apply"},
            {val: "C", text: "Retrieve, Assess, Apply"},
            {val: "D", text: "Get, Test, Push"},
            {val: "E", text: "Pull, Review, Push"},
        ],
        answer: "A"
    },
    {
        q: "When importing spreadsheet data into ServiceNow, in which step does the data get written to the receiving table?",
        options: [
            {val: "A", text: "Run Transform"},
            {val: "B", text: "Run Import"},
            {val: "C", text: "Import Dataset"},
            {val: "D", text: "Execute Transform"},
            {val: "E", text: "Schedule Transform"},
        ],
        answer: "A"
    },
    {
        q: "What would you do, on a list, if you wanted to show the records in groups, based on the column category? (Choose two.)",
        options: [
            {val: "A", text: "On list Context Menu, select Group By > Category"},
            {val: "B", text: "On the Filter Menu, select Group By > Category"},
            {val: "C", text: "Click Group On icon, select Category"},
            {val: "D", text: "On Navigator Filter, type tablename.group.category and press enter"},
            {val: "E", text: "On the Category column title, click Context menu > Group By Category"},
        ],
        answer: "A,E"
    },
    {
        q: "Which collaboration tool is available from the banner, using the bubble icon?",
        options: [
            {val: "A", text: "Now Messenger"},
            {val: "B", text: "Agent Chat"},
            {val: "C", text: "Connect Chat"},
            {val: "D", text: "Collaborate Now"},
            {val: "E", text: "Live Feed"},
        ],
        answer: "C"
    },
    {
        q: "On the knowledge base record, which tab would you use to define which users are not able to write articles to the knowledge base?",
        options: [
            {val: "A", text: "Can Contribute"},
            {val: "B", text: "Cannot Author"},
            {val: "C", text: "Cannot Contribute"},
            {val: "D", text: "Cannot Write"},
            {val: "E", text: "Read Only"},
        ],
        answer: "C"
    },
    {
        q: "Which features allow you to update multiple records at one time? (Choose two.)",
        options: [
            {val: "A", text: "List Editor"},
            {val: "B", text: "Field Update Action"},
            {val: "C", text: "Bulk Record Update"},
            {val: "D", text: "Data Remediation Dashboard"},
            {val: "E", text: "Update Selected Action"},
        ],
        answer: "A,E"
    },
    {
        q: "Categories in the knowledge base, by default, can be created and edited by which knowledge workers? (Choose two.)",
        options: [
            {val: "A", text: "Knowledge Authors"},
            {val: "B", text: "Knowledge Contributors"},
            {val: "C", text: "Knowledge Controller"},
            {val: "D", text: "Knowledge Managers"},
            {val: "E", text: "Knowledge Category Managers"},
            {val: "F", text: "Knowledge Submitters"},
            {val: "G", text: "Knowledge Owners"},
            {val: "H", text: "Knowledge Taxonomy Owner"},
        ],
        answer: "B,D"
    },
    {
        q: "Which collaboration tool opens a sidebar and allows you to create new conversations with other ServiceNow users?",
        options: [
            {val: "A", text: "Skype Now"},
            {val: "B", text: "Collaborate Now"},
            {val: "C", text: "Agent Messenger"},
            {val: "D", text: "Agent Chat"},
            {val: "E", text: "Connect Chat"},
        ],
        answer: "E"
    },
    {
        q: "What module would you use if you wanted to view a list of all of the fields on the Incident table? (Choose two.)",
        options: [
            {val: "A", text: "Tables & Columns"},
            {val: "B", text: "Dictionary"},
            {val: "C", text: "Data Class Manager"},
            {val: "D", text: "Dictionary Dashboard"},
            {val: "E", text: "Database View"},
            {val: "F", text: "Schema"},
        ],
        answer: "A,B"
    },
    {
        q: "What component causes a flow to run after a record has been created or updated?",
        options: [
            {val: "A", text: "Date-based trigger"},
            {val: "B", text: "On-change trigger"},
            {val: "C", text: "Record-based trigger"},
            {val: "D", text: "Application-based trigger"},
            {val: "E", text: "Updated-date trigger"},
        ],
        answer: "C"
    },
    {
        q: "What type of field is Boolean and appears as a check box?",
        options: [
            {val: "A", text: "Yes/No"},
            {val: "B", text: "True/False"},
            {val: "C", text: "On/Off"},
            {val: "D", text: "Binary"},
            {val: "E", text: "0/1"},
        ],
        answer: "B"
    },
    {
        q: "Which module is used to access the knowledge bases which are available to you?",
        options: [
            {val: "A", text: "Knowledge > Home"},
            {val: "B", text: "Self Service > Knowledge"},
            {val: "C", text: "Knowledge > All"},
            {val: "D", text: "Knowledge > Knowledge Bases"},
            {val: "E", text: "Knowledge > Overview"},
        ],
        answer: "B"
    },
    {
        q: "A customer requests the following data quality measures be added: Incident numbers should be read only, on all lists and forms, for all users. Short Description field should be mandatory, on all records, across all applications, on Insert. Which type of policy would you use to meet this requirement?",
        options: [
            {val: "A", text: "Data Quality Policy"},
            {val: "B", text: "Dictionary Design Policy"},
            {val: "C", text: "UI Data Policy"},
            {val: "D", text: "UI Policy"},
            {val: "E", text: "Field Criteria Policy"},
            {val: "F", text: "Data Policy"},
        ],
        answer: "F"
    },
    {
        q: "What type of user (persona) has clearly defined paths and workflows in the platform and have one or more roles (ie itil and approver_user)?",
        options: [
            {val: "A", text: "Workflow User"},
            {val: "B", text: "Request Fulfiller"},
            {val: "C", text: "ITSM User"},
            {val: "D", text: "Approving Manager"},
            {val: "E", text: "Service Desk User"},
            {val: "F", text: "Process User"},
        ],
        answer: "F"
    },
    {
        q: "Which module would you use to customize your instances banner image, text and colors?",
        options: [
            {val: "A", text: "System UI > UI Pages > Branding"},
            {val: "B", text: "Service Portal > Portals > Branding"},
            {val: "C", text: "System Properties > Basic Configuration UI16"},
            {val: "D", text: "System Properties > Branding"},
            {val: "E", text: "Homepage Admin > Pages > Branding"},
        ],
        answer: "C"
    },
    {
        q: "Which database provides a logical model of your company infrastructure by identifying, controlling, maintaining and verifying CIs that exist?",
        options: [
            {val: "A", text: "IMDB"},
            {val: "B", text: "ITSM"},
            {val: "C", text: "CSDM"},
            {val: "D", text: "CMDB"},
            {val: "E", text: "LDAP"},
        ],
        answer: "D"
    },
    {
        q: "Which module is used as the first step for importing data?",
        options: [
            {val: "A", text: "Coalesce Data"},
            {val: "B", text: "Transform Data"},
            {val: "C", text: "Import Data"},
            {val: "D", text: "Load Data"},
        ],
        answer: "D"
    },
    {
        q: "When you need to orchestrate business processes across services with little technical user knowledge, which utility would you use?",
        options: [
            {val: "A", text: "Flow Manager"},
            {val: "B", text: "Flow Designer"},
            {val: "C", text: "Flow Editor"},
            {val: "D", text: "Workflow Editor"},
            {val: "E", text: "Workflow Designer"},
        ],
        answer: "B"
    },
    {
        q: "When a user reports that they are not able to see modules on the application navigator, what can you do, to see what modules are visible to them?",
        options: [
            {val: "A", text: "Look up their password, so you can login with their account"},
            {val: "B", text: "Initiate a Connect Chat session"},
            {val: "C", text: "Install the Bomgar plug-in"},
            {val: "D", text: "Impersonate the user"},
            {val: "E", text: "Launch a NowChat window"},
        ],
        answer: "D"
    },
    {
        q: "What is a key difference between Reporting and Performance Analytics?",
        options: [
            {val: "A", text: "Performance Analytics contains snapshots of data taken over time; Reporting shows only the data as it is, at the moment the report is run."},
            {val: "B", text: "Performance Analytics can show trends; Reports cannot."},
            {val: "C", text: "Reports can be run on a scheduled basis; Performance Analytics cannot."},
            {val: "D", text: "Performance Analytics data can be published to Dashboards; Reports cannot."},
            {val: "E", text: "Performance Analytics shows KPIs; Reporting does not."},
        ],
        answer: "A"
    },
    {
        q: "While showing a customer their incident form, they ask to change the Priority values to display their internal terminology P1, P2, P3, P4. They want it to be consistent across all Tasks. How would you do that? Right click on Priority and select what?",
        options: [
            {val: "A", text: "Configure Lists"},
            {val: "B", text: "Show Options"},
            {val: "C", text: "Configure Task"},
            {val: "D", text: "Show Choices"},
            {val: "E", text: "Show Choice List"},
            {val: "F", text: "Configure Options"},
        ],
        answer: "E"
    },
    {
        q: "Your customer would like to create a new template to notify users who are affected by network outages at their site. Which module would you use to create a new notification?",
        options: [
            {val: "A", text: "System Notification > Email > Notifications"},
            {val: "B", text: "Administration > Notification Overview"},
            {val: "C", text: "System Properties > Email > Settings"},
            {val: "D", text: "User Preferences > Email > Notifications"},
            {val: "E", text: "Click Gear > Notifications > New"},
        ],
        answer: "A"
    },
    {
        q: "When designing a flow, how do you reference data from a record, in that flow?",
        options: [
            {val: "A", text: "Drag the table icon onto the flow definition"},
            {val: "B", text: "Use the condition builder to specify the desired values"},
            {val: "C", text: "Specify the source table on the data pill related list"},
            {val: "D", text: "Drag the data pill onto the flow definition"},
            {val: "E", text: "Add the table reference using the slush bucket"},
        ],
        answer: "D"
    },
    {
        q: "On the Reports page, what sections allow you to see which reports are visible to different audiences? (Choose four.)",
        options: [
            {val: "A", text: "Group"},
            {val: "B", text: "Department"},
            {val: "C", text: "My reports"},
            {val: "D", text: "Team"},
            {val: "E", text: "Dashboards"},
            {val: "F", text: "Global"},
            {val: "G", text: "Admin"},
            {val: "H", text: "Analytics"},
            {val: "I", text: "All"},
            {val: "J", text: "Company"},
        ],
        answer: "A,C,F,I"
    },
    {
        q: "Which tool is used to define relationships between fields in an import set table and a target table?",
        options: [
            {val: "A", text: "Transform Schema"},
            {val: "B", text: "Schema Map"},
            {val: "C", text: "Dictionary Map"},
            {val: "D", text: "Transform Map"},
            {val: "E", text: "Field Transformer"},
            {val: "F", text: "Import Designer"},
        ],
        answer: "D"
    },
    {
        q: "Which ServiceNow capability provides assistance to help users obtain information, make decisions, and perform common work tasks via a messaging interface?",
        options: [
            {val: "A", text: "Agent Workspace"},
            {val: "B", text: "Chat bot"},
            {val: "C", text: "Virtual Agent"},
            {val: "D", text: "Knowledge Chat"},
            {val: "E", text: "Now Support"},
        ],
        answer: "C"
    },
    {
        q: "Which feature allows you to automate business logic for a particular application or process such as approvals, tasks notifications, and record operations?",
        options: [
            {val: "A", text: "Flows"},
            {val: "B", text: "Action Sequences"},
            {val: "C", text: "Action Sets"},
            {val: "D", text: "Task Flows"},
            {val: "E", text: "Flow Diagrams"},
        ],
        answer: "A"
    },
    {
        q: "From a form, what would you click to add additional fields to the form? (Choose two.)",
        options: [
            {val: "A", text: "Context Menu > Form > Layout"},
            {val: "B", text: "Context Menu > Configure > Form Layout"},
            {val: "C", text: "Context Menu > Configure > Form Design"},
            {val: "D", text: "Right click on header > Add > Field"},
            {val: "E", text: "Context Menu > Form > Designer"},
            {val: "F", text: "Right click on header > Configure > UX Dashboard"},
        ],
        answer: "B,C"
    },
    {
        q: "What is the name of the table relationship, where two or more tables are related in a bi-directional relationship, so that the related records are visible from both tables in a related list?",
        options: [
            {val: "A", text: "Database View"},
            {val: "B", text: "Many to Many"},
            {val: "C", text: "One to Many"},
            {val: "D", text: "Extended"},
        ],
        answer: "B"
    },
    {
        q: "On a Form header, what is the three bar icon called?",
        options: [
            {val: "A", text: "Pancake icon"},
            {val: "B", text: "Additional Actions or Context Menu"},
            {val: "C", text: "Hamburger icon"},
            {val: "D", text: "Cake icon"},
        ],
        answer: "B"
    },
    {
        q: "Group records are stored in which table?",
        options: [
            {val: "A", text: "Group [sn_user_group]"},
            {val: "B", text: "Group [sys_user_group]"},
            {val: "C", text: "Group [s_sys_group]"},
            {val: "D", text: "Group [u_sys_group]"},
        ],
        answer: "B"
    },
    {
        q: "What function do you use to add buttons, links, and context menu items on forms and lists?",
        options: [
            {val: "A", text: "UI Policies"},
            {val: "B", text: "UI Settings"},
            {val: "C", text: "UI Actions"},
            {val: "D", text: "UI Config"},
        ],
        answer: "C"
    },
    {
        q: "On a Business Rule, the When setting determines at what point the rule executes. What are the options for specifying that timing?",
        options: [
            {val: "A", text: "Before, After, Async, Display"},
            {val: "B", text: "Prior to, Synchronous, on Update"},
            {val: "C", text: "Insert, Update, Delete, Query"},
            {val: "D", text: "Before, Synchronous, Scheduled Job, View"},
        ],
        answer: "A"
    },
    {
        q: "What are different types of Data Sources, which may be imported into ServiceNow? (Choose four.)",
        options: [
            {val: "A", text: "Local Sources (i.e. XML, CSV, Excel)"},
            {val: "B", text: "Implementation Spoke"},
            {val: "C", text: "DataHub"},
            {val: "D", text: "JDBC Connection"},
            {val: "E", text: "Network Server"},
            {val: "F", text: "LDAP Connection"},
        ],
        answer: "A,D,E,F"
    },
    {
        q: "What are the components that make up a filters condition? (Choose three.)",
        options: [
            {val: "A", text: "Operator"},
            {val: "B", text: "Match Criteria"},
            {val: "C", text: "Value"},
            {val: "D", text: "Column"},
            {val: "E", text: "Field"},
        ],
        answer: "A,C,E"
    },
    {
        q: "When impersonating a user for testing purposes, what is the best way to return the instance, logged in with your user account?",
        options: [
            {val: "A", text: "Turn your computer off and on again"},
            {val: "B", text: "Clear browser cache"},
            {val: "C", text: "End Impersonation"},
            {val: "D", text: "Log out and back in"},
        ],
        answer: "C"
    },
    {
        q: "What controls the publishing and retiring process for knowledge articles?",
        options: [
            {val: "A", text: "Approval Policies"},
            {val: "B", text: "Approval Definitions"},
            {val: "C", text: "Workflow Designer"},
            {val: "D", text: "Workflows"},
            {val: "E", text: "State Lifecycle"},
        ],
        answer: "D"
    },
    {
        q: "What type of query allows you to filter list data using normal words, instead of the condition builder?",
        options: [
            {val: "A", text: "Natural Language Query"},
            {val: "B", text: "Alexa Query"},
            {val: "C", text: "Machine Learning Query"},
            {val: "D", text: "Predictive Intelligence Query"},
            {val: "E", text: "Auto-suggest Query"},
        ],
        answer: "A"
    },
    {
        q: "Tables may have a One to Many relationships. From the Service Catalog, what are examples of tables having a one to many relationships? (Choose three.)",
        options: [
            {val: "A", text: "One Approval can have many Requests"},
            {val: "B", text: "One Request can have many Requested Items"},
            {val: "C", text: "One Requested Item can have many Approvals"},
            {val: "D", text: "One Requested Item can have many Catalog Tasks"},
            {val: "E", text: "One Cart can have many Requests"},
        ],
        answer: "B,C,D"
    },
    {
        q: "On a filter condition, which component is always a choice list?",
        options: [
            {val: "A", text: "Operator"},
            {val: "B", text: "Filter Criteria"},
            {val: "C", text: "Operation"},
            {val: "D", text: "Match Criteria"},
        ],
        answer: "A"
    },
    {
        q: "A Role is defined as what?",
        options: [
            {val: "A", text: "A collection of permissions"},
            {val: "B", text: "A set of user access policies"},
            {val: "C", text: "A Persona in a workflow"},
            {val: "D", text: "A set of access control rules"},
        ],
        answer: "A"
    },
    {
        q: "A user is complaining that they are seeing a blank page, when they click Create New, from your custom Inventory application. You have confirmed that they can see the Inventory application, and the Create New module on the application navigator. What could be the cause of this issue?",
        options: [
            {val: "A", text: "Create New module has a broken link"},
            {val: "B", text: "Known intermittent issue with UI15"},
            {val: "C", text: "User should be using Chrome instead of Explorer for their browser"},
            {val: "D", text: "User has read role, but not the write role on the Inventory table"},
            {val: "E", text: "User session has timed out"},
        ],
        answer: "D"
    },
    {
        q: "What resource can you use to view details of the tables and configuration items (CIs) associated with a particular use case?",
        options: [
            {val: "A", text: "Scenario Dashboard"},
            {val: "B", text: "CI Use Case Modeler"},
            {val: "C", text: "CMDB Use Case Modeler"},
            {val: "D", text: "Common Service Data Model (CSDM) product view"},
        ],
        answer: "D"
    },
    {
        q: "A manager wants to view a snapshot of month-end Sales performance data, as compared to Sales targets. In addition, the manager wants to be able to see those monthly numbers trended over time, and forecasted into the future. What capability do you suggest for this manager?",
        options: [
            {val: "A", text: "Scheduled Reports, a custom snapshot table, and a Trend report"},
            {val: "B", text: "Scheduled Reports and Excel"},
            {val: "C", text: "Scheduled Reports, a custom snapshot table, and a Projection report"},
            {val: "D", text: "Performance Analytics"},
            {val: "E", text: "Key Performance Indicators"},
        ],
        answer: "D"
    },
    {
        q: "What are advantages of using Flow Designer? (Choose three.)",
        options: [
            {val: "A", text: "Supports advanced developers"},
            {val: "B", text: "Enables complicated scripting"},
            {val: "C", text: "Reduces technical debt"},
            {val: "D", text: "Less manual scripting"},
            {val: "E", text: "Smooth integration with 3rd party systems"},
        ],
        answer: "C,D,E"
    },
    {
        q: "Your customer requires that they be able to monitor which users are performing impersonations in their instance. What would you do to meet that requirement?",
        options: [
            {val: "A", text: "Add the role Log Write [sn_log_write] to the Impersonator Group"},
            {val: "B", text: "Create user update set for impersonation tracking"},
            {val: "C", text: "Activate the glide.sys.log_impersonation prop"},
            {val: "D", text: "From User icon, select Elevate Roles"},
            {val: "E", text: "On the Impersonator role record, right click and select Create Log"},
        ],
        answer: "C"
    },
    {
        q: "When a flow runs an action, it generates a runtime value, which stays the same for the duration of the flow. What is the name of this runtime value?",
        options: [
            {val: "A", text: "Trigger runtime value"},
            {val: "B", text: "Sequence runtime value"},
            {val: "C", text: "Starting runtime value"},
            {val: "D", text: "Data pill runtime value"},
            {val: "E", text: "Input runtime value"},
        ],
        answer: "D"
    },
    {
        q: "The wait time for end users is based on the round-trip between the client and the server. What activities are included in the round-trips?",
        options: [
            {val: "A", text: "Request + Response"},
            {val: "B", text: "Save + Update"},
            {val: "C", text: "Write + Read"},
            {val: "D", text: "Submit + Query"},
            {val: "E", text: "Insert + Verify"},
        ],
        answer: "A"
    },
    {
        q: "When importing data, what happens to imported rows, if no coalesce field is specified?",
        options: [
            {val: "A", text: "All rows are rejected from the import, as coalesce field is required."},
            {val: "B", text: "All rows are treated as new records. No existing records are updated."},
            {val: "C", text: "Duplicate rows are rejected from the import."},
            {val: "D", text: "All rows are treated as new records, but errors will be flagged in the import log."},
        ],
        answer: "B"
    },
    {
        q: "What is the most common role that has access to almost all platform features, functions, and data?",
        options: [
            {val: "A", text: "Security Admin [security_admin]"},
            {val: "B", text: "Sys Admin [sys_admin]"},
            {val: "C", text: "Admin [sn_admin]"},
            {val: "D", text: "System Administrator [admin]"},
            {val: "E", text: "Base Admin [base_admin]"},
        ],
        answer: "D"
    },
    {
        q: "What feature do you use to specify which users are able to access a Service Catalog Item?",
        options: [
            {val: "A", text: "Can Read Role"},
            {val: "B", text: "Catalog User Role"},
            {val: "C", text: "Can Order Tab"},
            {val: "D", text: "User Criteria"},
        ],
        answer: "D"
    },
    {
        q: "Which component of a table contains a piece of data for one record?",
        options: [
            {val: "A", text: "Factor"},
            {val: "B", text: "Field"},
            {val: "C", text: "Datapoint"},
            {val: "D", text: "Element"},
            {val: "E", text: "Item"},
        ],
        answer: "B"
    },
    {
        q: "What type of field has a drop down list, from which you can pick from pre-defined options?",
        options: [
            {val: "A", text: "Choice"},
            {val: "B", text: "Picker"},
            {val: "C", text: "Drop down"},
            {val: "D", text: "Option"},
        ],
        answer: "A"
    },
    {
        q: "User records are stored in which table?",
        options: [
            {val: "A", text: "User [sys_user]"},
            {val: "B", text: "User [sn_user]"},
            {val: "C", text: "User [u_sys_user]"},
            {val: "D", text: "User [s_user]"},
        ],
        answer: "A"
    },
    {
        q: "What ServiceNow feature can be triggered by events, and is used to inform users about activities or updates in ServiceNow?",
        options: [
            {val: "A", text: "Notifications"},
            {val: "B", text: "Alerts"},
            {val: "C", text: "Texts"},
            {val: "D", text: "Events"},
            {val: "E", text: "Emails"},
        ],
        answer: "A"
    },
    {
        q: "Which ServiceNow capability allows you to provide knowledge articles, via a conversational messaging interface?",
        options: [
            {val: "A", text: "Agent Assist"},
            {val: "B", text: "Virtual Agent"},
            {val: "C", text: "Now Messenger"},
            {val: "D", text: "Connect Agent"},
        ],
        answer: "B"
    },
    {
        q: "Which role can manage multiple knowledge bases?",
        options: [
            {val: "A", text: "knowledge_base_admin"},
            {val: "B", text: "kb_admin"},
            {val: "C", text: "sn_kb_admin"},
            {val: "D", text: "knowledge_admin"},
        ],
        answer: "D"
    },
    {
        q: "Which statement correctly describes the differences between a Client Script and a Business Rule?",
        options: [
            {val: "A", text: "A Client Script executes before a record is loaded and a Business Rule executes after a record is loaded"},
            {val: "B", text: "A Client Script executes on the server and a Business Rule executes on the client"},
            {val: "C", text: "A Client Script executes on the client and a Business Rule executes on the server"},
            {val: "D", text: "A Client Script executes before a record is loaded and a Business Rule executes after a record is updated"},
        ],
        answer: "C"
    },
    {
        q: "What are benefits of assigning work tasks to a group, rather than to an individual? (Choose four.)",
        options: [
            {val: "A", text: "Group members can choose their tasks from My Groups Work"},
            {val: "B", text: "Groups can assign tasks to users based on on-call schedules"},
            {val: "C", text: "Site support members can pick tasks, based on Location"},
            {val: "D", text: "Groups can assign tasks to users based on skills"},
            {val: "E", text: "Group members can avoid tasks, which are nearing SLA breach"},
            {val: "F", text: "Groups can assign tasks to users based on availability"},
        ],
        answer: "A,B,D,F"
    },
    {
        q: "What ServiceNow feature allows you to include data from a secondary related table on a report?",
        options: [
            {val: "A", text: "SQL"},
            {val: "B", text: "Dot Walking"},
            {val: "C", text: "Outer Join"},
            {val: "D", text: "Joins"},
        ],
        answer: "B"
    },
    {
        q: "What attributes can you manage, using System Properties > Basic Configuration UI16? (Choose five.)",
        options: [
            {val: "A", text: "Browser tab title"},
            {val: "B", text: "Module text color"},
            {val: "C", text: "Preferred browser"},
            {val: "D", text: "Base theme"},
            {val: "E", text: "Font style"},
            {val: "F", text: "Animation style"},
            {val: "G", text: "Header background color"},
            {val: "H", text: "Banner Image"},
        ],
        answer: "A,B,D,G,H"
    },
    {
        q: "Which field (or fields) is used as a unique key during imports?",
        options: [
            {val: "A", text: "Match Fields"},
            {val: "B", text: "Coalesce Fields"},
            {val: "C", text: "Key Fields"},
            {val: "D", text: "Sys IDs"},
        ],
        answer: "B"
    },
    {
        q: "You are asked to create an option in the Service Catalog, which will allow a user to click Get Help and describe the issue they are having. These forms should create incident records, which are automatically routed to the Service Desk. Which method would you use?",
        options: [
            {val: "A", text: "Create Record Producer"},
            {val: "B", text: "Create Catalog Item"},
            {val: "C", text: "Create Order Guide"},
            {val: "D", text: "Create Content Item"},
        ],
        answer: "A"
    },
    {
        q: "What is the result of the order in which access controls are evaluated?",
        options: [
            {val: "A", text: "Ensures user has access to the fields in a table, before considering their access to the table"},
            {val: "B", text: "Ensures user can get to work as quickly as possible"},
            {val: "C", text: "Ensures user has access to the application, before evaluating access to a module within the application"},
            {val: "D", text: "Ensures user has access to a table, before evaluating access to a field in the table"},
        ],
        answer: "D"
    },
    {
        q: "Which tool graphically displays an infrastructure view for a configuration item (CI) and its relationship with other CIs?",
        options: [
            {val: "A", text: "Schema Map"},
            {val: "B", text: "Dependency View"},
            {val: "C", text: "Dependency Map"},
            {val: "D", text: "Database View"},
        ],
        answer: "B"
    },
    {
        q: "What are examples of Core tables in the ServiceNow platform?",
        options: [
            {val: "A", text: "Configuration, Connect, Chat"},
            {val: "B", text: "Team, Party, Awards"},
            {val: "C", text: "User, Task, Incident"},
            {val: "D", text: "Work, Caller, Timecard"},
        ],
        answer: "C"
    },
    {
        q: "Which tab on the knowledge base record, would you use to identify the sets of users who are able to read articles in that knowledge base?",
        options: [
            {val: "A", text: "Access List"},
            {val: "B", text: "Can Access"},
            {val: "C", text: "Accessible to"},
            {val: "D", text: "Can Read"},
        ],
        answer: "D"
    },
    {
        q: "What are the main components of the Form Design interface? (Choose three.)",
        options: [
            {val: "A", text: "Field Layout"},
            {val: "B", text: "Page Header"},
            {val: "C", text: "Field Navigator"},
            {val: "D", text: "Field Picker"},
            {val: "E", text: "Form Layout"},
        ],
        answer: "B,C,E"
    },
    {
        q: "What is used to determine user access to knowledge bases or a knowledge article?",
        options: [
            {val: "A", text: "sn_kb_read, sn_article_read"},
            {val: "B", text: "Privacy Settings"},
            {val: "C", text: "Read Access Flag"},
            {val: "D", text: "User Criteria"},
        ],
        answer: "D"
    },
    {
        q: "What are the three key tables in an enterprise CMDB? (Choose three.)",
        options: [
            {val: "A", text: "cmdb"},
            {val: "B", text: "sn_cmdb_bak"},
            {val: "C", text: "cmdb_rel_ci"},
            {val: "D", text: "sn_cmdb"},
            {val: "E", text: "cmdb_bak"},
            {val: "F", text: "cmdb_ci"},
            {val: "G", text: "sn_cmdb_ci"},
        ],
        answer: "A,C,F"
    },
    {
        q: "What is the best practice related to using the Default Update Set for moving customizations between instances?",
        options: [
            {val: "A", text: "Merge Default update sets before moving between instances"},
            {val: "B", text: "Submit Default update set to application repository"},
            {val: "C", text: "You should not use the Default Update sets for moving between instances"},
            {val: "D", text: "Keep Default update set to maximum of 20 records, for troubleshooting purposes"},
        ],
        answer: "C"
    },
    {
        q: "On what part of the ServiceNow instance, would you find the option to Impersonate User?",
        options: [
            {val: "A", text: "Module"},
            {val: "B", text: "Content Frame"},
            {val: "C", text: "Application Navigator"},
            {val: "D", text: "Banner"},
        ],
        answer: "D"
    },
    {
        q: "Which application is used primarily to load data into ServiceNow?",
        options: [
            {val: "A", text: "Import Hub"},
            {val: "B", text: "System Import Sets"},
            {val: "C", text: "Data Import Configuration"},
            {val: "D", text: "Import Management"},
        ],
        answer: "B"
    },
    {
        q: "If a knowledge base has no access details specified, what users are able to read articles in that knowledge base?",
        options: [
            {val: "A", text: "itil users"},
            {val: "B", text: "Any user with an article's permalink"},
            {val: "C", text: "Any active user"},
            {val: "D", text: "No users"},
            {val: "E", text: "Users with kb_user role"},
        ],
        answer: "C"
    },
    {
        q: "How would you define an Access Control, to allow a user with itil role to have permission to create incident records?",
        options: [
            {val: "A", text: "Name: incident.None; Operation: create; Role: itil"},
            {val: "B", text: "Name: incident.Any; Operation: write; Permission: itil"},
            {val: "C", text: "Name: incident:*; Permission: write; Role: itil"},
            {val: "D", text: "Name: incident.None; Permission: create; Role: itil"},
            {val: "E", text: "Name: incident:*; Operation: write; Permission: itil"},
        ],
        answer: "A"
    },
    {
        q: "What Service Catalog feature do you use to organize items into logical groups?",
        options: [
            {val: "A", text: "Categories"},
            {val: "B", text: "Variable Sets"},
            {val: "C", text: "Sections"},
            {val: "D", text: "Catalog items"},
        ],
        answer: "A"
    },
    {
        q: "When creating a new notification, what must you define? (Choose three.)",
        options: [
            {val: "A", text: "The associated knowledge base"},
            {val: "B", text: "Settings for handling inactive user accounts"},
            {val: "C", text: "Under what conditions is the notification sent"},
            {val: "D", text: "Who receives the notification"},
            {val: "E", text: "What the content of the notification"},
        ],
        answer: "C,D,E"
    },
    {
        q: "The ServiceNow platform supports a wide variety of plug-and-play applications. You can choose from the included workflows or build your own workflow: Which of these workflows are included in the platform? (Choose three.)",
        options: [
            {val: "A", text: "Federal Workflows"},
            {val: "B", text: "Customer Workflows"},
            {val: "C", text: "Infrastructure Workflows"},
            {val: "D", text: "Manufacturing Workflows"},
            {val: "E", text: "Employee Workflows"},
            {val: "F", text: "IT Workflows"},
        ],
        answer: "B,E,F"
    },
    {
        q: "An IT manager is responsible for the Network and Hardware assignment groups, each group contains 5 team members. These team members are working on many tasks, but the manager cannot see any tasks on the Service Desk > My Groups Work list. What could explain this?",
        options: [
            {val: "A", text: "The Assignment Group manager field is empty."},
            {val: "B", text: "The manager does not have the itil role."},
            {val: "C", text: "The manager is not a member of the Service Desk group."},
            {val: "D", text: "The manager is not a member of the Network and Hardware groups."},
        ],
        answer: "D"
    },
    {
        q: "You have been asked to configure a form so an employee could order a tablet and select the standard accessory options to purchase with it. These standard options are: carrying case, screen cleaner, tablet stand, and screen protector. What approach would you take? (Choose three.)",
        options: [
            {val: "A", text: "Create Catalog Item for the Tablet, and add a variable set to the form, for the accessory options."},
            {val: "B", text: "Create a Record producer, and on the form, add a check box variable for each accessory option."},
            {val: "C", text: "On Shopping Cart configuration, select option to show the Add Accessories button."},
            {val: "D", text: "Create one Catalog item for each: tablet, carrying case, screen cleaner, tablet stand, and screen protector."},
            {val: "E", text: "Create Catalog Item for the tablet, and on the form, add a check box variable for each accessory option."},
        ],
        answer: "A,D,E"
    },
    {
        q: "Which ServiceNow utility provides a modern interactive graphical interface to visualize configuration items and their relationships?",
        options: [
            {val: "A", text: "Dependency View"},
            {val: "B", text: "CI Class Map"},
            {val: "C", text: "Business Service Map"},
            {val: "D", text: "CSDM Schema"},
        ],
        answer: "A"
    },
    {
        q: "What is the definition of a group?",
        options: [
            {val: "A", text: "A collection of subject matter experts"},
            {val: "B", text: "A team of users"},
            {val: "C", text: "An escalation pod"},
            {val: "D", text: "A collection of users"},
            {val: "E", text: "A department"},
        ],
        answer: "D"
    },
    {
        q: "On the Reports page, what sections allow you to see which reports are visible to different audiences? (Choose four.)",
        options: [
            {val: "A", text: "Group"},
            {val: "B", text: "Department"},
            {val: "C", text: "My reports"},
            {val: "D", text: "Team"},
            {val: "E", text: "Global"},
            {val: "F", text: "All"},
        ],
        answer: "A,C,E,F"
    },
    {
        q: "On a filter condition, there is an element, which is based on the table, the user access rights, and columns on the table. What is this element called?",
        options: [
            {val: "A", text: "Label"},
            {val: "B", text: "Column"},
            {val: "C", text: "Data Element"},
            {val: "D", text: "Field"},
            {val: "E", text: "Attribute"},
        ],
        answer: "D"
    },
    {
        q: "You have been asked to create a way for users to order a new iPhone, but only if they get two levels of approval. The approvers and users should be automatically notified at each approval level. What feature would you use to manage the approvals and notifications?",
        options: [
            {val: "A", text: "Approval Chains"},
            {val: "B", text: "Flows"},
            {val: "C", text: "Approver Delegates"},
            {val: "D", text: "Parent-Child Approvers"},
            {val: "E", text: "Approval Criteria"},
        ],
        answer: "B"
    },
    {
        q: "Groups are stored in what table?",
        options: [
            {val: "A", text: "User Group [user_groups]"},
            {val: "B", text: "Groups [sys_user_groups]"},
            {val: "C", text: "Group [sn_sys_user_group]"},
            {val: "D", text: "Group [sys_user_group]"},
            {val: "E", text: "User Groups [sn_user_groups]"},
        ],
        answer: "D"
    },
    {
        q: "When managing tags, you can adjust who is able to see it. What are the visibility options? (Choose three.)",
        options: [
            {val: "A", text: "Groups and Users"},
            {val: "B", text: "Me"},
            {val: "C", text: "Roles and Permissions"},
            {val: "D", text: "Everyone"},
            {val: "E", text: "Admins"},
        ],
        answer: "A,B,D"
    },
    {
        q: "What module enables an administrator to define destinations for imported data on any ServiceNow table?",
        options: [
            {val: "A", text: "Field Transform"},
            {val: "B", text: "Schema Map"},
            {val: "C", text: "Transform Map"},
            {val: "D", text: "Import Map"},
        ],
        answer: "C"
    },
    {
        q: "On the Form header, which icon do you use to access form templates?",
        options: [
            {val: "A", text: "Stamp"},
            {val: "B", text: "Pages"},
            {val: "C", text: "More Options (...)"},
            {val: "D", text: "Paperclip"},
        ],
        answer: "C"
    },
    {
        q: "When using the Data Pill Picker, use which keys to dot-walk to fields in other tables?",
        options: [
            {val: "A", text: "Plus, Minus"},
            {val: "B", text: "Ctrl <, Ctrl >"},
            {val: "C", text: "Arrows"},
            {val: "D", text: "Ctrl C, Ctrl V"},
            {val: "E", text: "Shift F4, Shift F5"},
        ],
        answer: "C"
    },
    {
        q: "In what order are Access Controls evaluated?",
        options: [
            {val: "A", text: "Field-level - most specific to most general; then Table-level - most specific to most general"},
            {val: "B", text: "Field-level - most general to most specific; then Row-level - most specific to most general"},
            {val: "C", text: "Table-level - most specific to most general; then Field-level - most specific to most general"},
            {val: "D", text: "Table-level - most specific to most general, then Row-level - most specific to most general"},
        ],
        answer: "C"
    },
    {
        q: "What instance resource allows you to access guided tours, information about actions, and instructions on how to use inputs and outputs in your flow?",
        options: [
            {val: "A", text: "Docs"},
            {val: "B", text: "Community"},
            {val: "C", text: "Help Panel (question mark icon)"},
            {val: "D", text: "Wiki"},
        ],
        answer: "C"
    },
    {
        q: "The Report Designer contains different sections for configuring your report. Which section is used to specify grouping and calculations to be run against the data?",
        options: [
            {val: "A", text: "Style"},
            {val: "B", text: "Group by"},
            {val: "C", text: "Configure"},
            {val: "D", text: "Format"},
            {val: "E", text: "Data"},
        ],
        answer: "E"
    },
    {
        q: "What icon do you use to change the icon and color on a Favorite?",
        options: [
            {val: "A", text: "Clock"},
            {val: "B", text: "Pencil"},
            {val: "C", text: "Triangle"},
            {val: "D", text: "Star"},
        ],
        answer: "B"
    },
    {
        q: "You have heard about a new application released by ServiceNow. You want to try it out, to see if it might be useful for your company's ServiceNow implementation. What would be the best way to get hands-on experience with the new application?",
        options: [
            {val: "A", text: "Search the wiki for the sales demo request form"},
            {val: "B", text: "Check the latest release notes at docs.servicenow.com"},
            {val: "C", text: "Activate the application plug in, on your personal dev instance"},
            {val: "D", text: "Activate the application plug in, on your company's production instance."},
        ],
        answer: "C"
    },
    {
        q: "When looking at a long list of records, you want to quickly filter, to show only those which have Category of Hardware. How might you do that?",
        options: [
            {val: "A", text: "On the Category column header, right click and select Show > Hardware"},
            {val: "B", text: "Right click on magnifier, type Hardware and click enter"},
            {val: "C", text: "On the list, locate and right click on the value Hardware, select Show Matching"},
            {val: "D", text: "On Breadcrumb, click > icon, type Hardware and click enter"},
            {val: "E", text: "Click Funnel icon, type Hardware and click enter"},
        ],
        answer: "C"
    },
    {
        q: "When looking at a long list of records, you want to quickly filter, to show only those which have Short Description containing email. How might you do that?",
        options: [
            {val: "A", text: "Click List Magnifier to expand column search, on Short Description, type email, click enter"},
            {val: "B", text: "On Search box, select text, type email, click enter"},
            {val: "C", text: "Click List Magnifier to expand column search, on Short Description, type *email, click enter"},
            {val: "D", text: "Click List Magnifier to expand column search, on Short Description, type %email, click enter"},
        ],
        answer: "C"
    },
    {
        q: "When importing spreadsheet data into ServiceNow, what is the first step in the process?",
        options: [
            {val: "A", text: "Run Data Scrubber"},
            {val: "B", text: "Set Coalesce"},
            {val: "C", text: "Select Import Set"},
            {val: "D", text: "Load Data"},
            {val: "E", text: "Define Data Source"},
        ],
        answer: "D"
    },
    {
        q: "Tables may be set up with Many to Many relationships. What is a classic example of a scenario where the tables would have many to many relationships?",
        options: [
            {val: "A", text: "Vendors can sell multiple products; and products can be sold by multiple vendors."},
            {val: "B", text: "A Task can trigger many Workflows; and a Workflow can trigger many Tasks."},
            {val: "C", text: "Requests can contain many Items; and Items can be any item from the catalog."},
            {val: "D", text: "A Configuration Item can belong to multiple Classes, and Classes can contain multiple Configuration Items."},
        ],
        answer: "A"
    },
    {
        q: "What section on a task record would you use to see the most recent update made to a record?",
        options: [
            {val: "A", text: "Audit Log"},
            {val: "B", text: "Timeline"},
            {val: "C", text: "Activity"},
            {val: "D", text: "Journal"},
        ],
        answer: "C"
    },
    {
        q: "The Employee On-boarding team has asked for a way for managers to order computers, monitors, business cards, and cell phones for new employees. How would you proceed to meet this requirement?",
        options: [
            {val: "A", text: "Create Requested Item"},
            {val: "B", text: "Create Record Producer"},
            {val: "C", text: "Create On-boarding Bot"},
            {val: "D", text: "Create Order Guide"},
        ],
        answer: "D"
    },
    {
        q: "On the CI Dependency View, what enables you to trace from an infrastructure item, like a Server, to the Services that are dependent on that Server?",
        options: [
            {val: "A", text: "Automapping Utility"},
            {val: "B", text: "Relationships"},
            {val: "C", text: "Service Tracer"},
            {val: "D", text: "Transform Map"},
        ],
        answer: "B"
    },
    {
        q: "From a related list, what would a user click to personalize the layout of the columns?",
        options: [
            {val: "A", text: "Gear"},
            {val: "B", text: "Context Menu"},
            {val: "C", text: "Pencil"},
            {val: "D", text: "Magnifier"},
        ],
        answer: "A"
    },
    {
        q: "What is the language used for scripting in ServiceNow?",
        options: [
            {val: "A", text: "C++"},
            {val: "B", text: "JavaScript"},
            {val: "C", text: "PHP"},
            {val: "D", text: "Python"},
        ],
        answer: "B"
    },
    {
        q: "What are examples of UI Actions, relating to Lists? (Choose four.)",
        options: [
            {val: "A", text: "List Links"},
            {val: "B", text: "List Choices"},
            {val: "C", text: "List Buttons"},
            {val: "D", text: "List Override"},
            {val: "E", text: "List Context Menu"},
            {val: "F", text: "List Control"},
        ],
        answer: "A,B,C,E"
    },
    {
        q: "A Service Catalog project will involve building 80 catalog items. For each of the catalog items, the following fields will be mandatory on the forms: • Requested for • Requested by • Approving manager • Delivery instructions All of the other variables will be specific to the individual catalog item. What features would you use when designing the catalog item form?",
        options: [
            {val: "A", text: "Create a Variable Set Template, then apply to all of the catalog items."},
            {val: "B", text: "Create one Variable Set for the four variables, then add that variable set to each of the 80 catalog items."},
            {val: "C", text: "Create a Record Producer that contains the four fields; then add to the record producer related list on the Catalog Items."},
            {val: "D", text: "Create a Flow Designer Action, with Variable Set Data Pill, then apply flow to all of the 80 catalog items."},
            {val: "E", text: "Create an Order Guide, which includes all variables; then copy and hide variables as needed."},
        ],
        answer: "B"
    },
    {
        q: "A task worker asks how they can monitor any updates occurring to records assigned to him, like responses from customers. What do you suggest?",
        options: [
            {val: "A", text: "On My Work list, select the Activity Stream icon to show a frame with live updates"},
            {val: "B", text: "Click on the eyeglass icon to expand the Monitor frame"},
            {val: "C", text: "Open an Agent workspace tab for each record he wants to monitor"},
            {val: "D", text: "Select Service Desk > My Work Dashboard"},
        ],
        answer: "A"
    },
    {
        q: "What access does a user need to be able to import articles to a knowledge base?",
        options: [
            {val: "A", text: "sn_knowledge_import"},
            {val: "B", text: "sn_knowledge_contribute"},
            {val: "C", text: "Can contribute"},
            {val: "D", text: "Can import"},
        ],
        answer: "C"
    },
    {
        q: "When importing data from a spreadsheet, which step defines where the incoming data columns will be written in the receiving table?",
        options: [
            {val: "A", text: "Schedule Transform"},
            {val: "B", text: "Field Matching"},
            {val: "C", text: "Select Data Source"},
            {val: "D", text: "Create Transform Map"},
            {val: "E", text: "Load Data"},
        ],
        answer: "D"
    },
    {
        q: "To apply a UI Policy to all views, which field should be set to true in its definition record?",
        options: [
            {val: "A", text: "Global"},
            {val: "B", text: "Reverse if false"},
            {val: "C", text: "On load"},
            {val: "D", text: "Inherit"},
        ],
        answer: "A"
    },
    {
        q: "What are the steps for importing data using an import set?",
        options: [
            {val: "A", text: "Select source file; Run automap; Transform data; Clean up target table"},
            {val: "B", text: "Identity source; Import transform map; Run transformer, Verify import"},
            {val: "C", text: "Setup LDAP; Test map; Create update set; Run import; Apply update set"},
            {val: "D", text: "Load the data; Create transform map; Transform data; Clean up import table"},
        ],
        answer: "D"
    },
    {
        q: "Which type of scripts run in the browser?",
        options: [
            {val: "A", text: "Script Include Scripts"},
            {val: "B", text: "Access Control Scripts"},
            {val: "C", text: "Business Rule Scripts"},
            {val: "D", text: "UI Policies and Client Scripts"},
        ],
        answer: "D"
    },
    {
        q: "Which modules can you use to create a new table? (Choose two.)",
        options: [
            {val: "A", text: "Dictionary"},
            {val: "B", text: "Schema Map"},
            {val: "C", text: "Tables"},
            {val: "D", text: "Tables & Columns"},
        ],
        answer: "C,D"
    },
    {
        q: "Which one of the following describes the primary operations performed against tables in the ServiceNow platform?",
        options: [
            {val: "A", text: "Create, Read, Upload, Delete"},
            {val: "B", text: "Capture, Rate, Write, Develop"},
            {val: "C", text: "Create, Rate, Update, Delete"},
            {val: "D", text: "Create, Read, Write, Delete"},
        ],
        answer: "D"
    },
    {
        q: "How is a user defined in ServiceNow?",
        options: [
            {val: "A", text: "A user is a record stored in the Profile [sys_user_profile] table"},
            {val: "B", text: "A user is a record stored in the User [sys_user] table"},
            {val: "C", text: "A user is a record stored in the User Preference [sys_user_preference] table"},
            {val: "D", text: "A user is a field in the LDAP integration"},
        ],
        answer: "B"
    },
    {
        q: "Which ServiceNow utility gives a Service Desk agent the ability to trace from a Service having an issue, to see which CIs supporting that service have active issues?",
        options: [
            {val: "A", text: "CI Dependency View"},
            {val: "B", text: "Event Management Homepage"},
            {val: "C", text: "Service Dashboard"},
            {val: "D", text: "CI Health Dashboard"},
        ],
        answer: "A"
    },
    {
        q: "Which feature enables business process owners to organize Flow Designer content into unified and digitized cross-enterprise processes via a digitized task board interface?",
        options: [
            {val: "A", text: "Flow Designer"},
            {val: "B", text: "Workflow Editor"},
            {val: "C", text: "Process Workflow Designer"},
            {val: "D", text: "Process Automation Designer"},
        ],
        answer: "D"
    },
    {
        q: "An IT user calls the service desk because they need to work on task records. All they can see is Self Service on their homepage when they login to the ServiceNow instance. What issue could explain this? (Choose two.)",
        options: [
            {val: "A", text: "Their user account does not have itil role"},
            {val: "B", text: "Their user account was not approved by their manager"},
            {val: "C", text: "Their user account is not logged in properly"},
            {val: "D", text: "Their user account failed LDAP authentication"},
            {val: "E", text: "Their user account does not belong to any groups, which contain the itil role"},
        ],
        answer: "A,E"
    },
    {
        q: "On a related list, which buttons are commonly used for managing the records on the list? (Choose three.)",
        options: [
            {val: "A", text: "Add"},
            {val: "B", text: "Edit"},
            {val: "C", text: "Publish"},
            {val: "D", text: "Manage"},
            {val: "E", text: "New"},
        ],
        answer: "A,B,E"
    },
    {
        q: "A customer requests the following data quality measures be added: • Incident numbers should be read only, on all lists and forms, for all users. • Short Description field should be mandatory, on all records, across all applications, on Insert. Which type of policy would you use to meet this requirement?",
        options: [
            {val: "A", text: "Data Quality Policy"},
            {val: "B", text: "Dictionary Design Policy"},
            {val: "C", text: "Data Policy"},
            {val: "D", text: "Field Criteria Policy"},
        ],
        answer: "C"
    },
    {
        q: "On what part of the ServiceNow instance, would you find the option to access applications, like Incident Management?",
        options: [
            {val: "A", text: "Application Navigator"},
            {val: "B", text: "Service Desk Homepage"},
            {val: "C", text: "Self Service Module"},
            {val: "D", text: "Favorites"},
        ],
        answer: "A"
    },
    {
        q: "What catalog tool would you use to create a catalog item or record producer?",
        options: [
            {val: "A", text: "Catalog Builder"},
            {val: "B", text: "Workflow Designer"},
            {val: "C", text: "Catalog Designer"},
            {val: "D", text: "Catalog Formatter"},
        ],
        answer: "A"
    },
    {
        q: "On a form, which type of field has this icon which can be clicked, to see a preview of the associated record?",
        options: [
            {val: "A", text: "Lookup"},
            {val: "B", text: "Preview"},
            {val: "C", text: "Reference"},
            {val: "D", text: "Snapshot"},
            {val: "E", text: "Quickview"},
            {val: "F", text: "Drilldown"},
        ],
        answer: "C"
    },
    {
        q: "While on an Incident record, how would you add a Tag for 'Special Handling' to the record?",
        options: [
            {val: "A", text: "Click on the Context menu, select Add Tag, type Special Handling, press enter"},
            {val: "B", text: "Click on the More options (...) icon, click Add Tag, type Special Handling, press enter"},
            {val: "C", text: "On the Tag field, select Special Handling from the choice list"},
            {val: "D", text: "On the Special Handling field, check the box"},
        ],
        answer: "B"
    },
    {
        q: "What feature allows you to limit who is able to contribute or read knowledge within a knowledge base?",
        options: [
            {val: "A", text: "Roles"},
            {val: "B", text: "Groups"},
            {val: "C", text: "User Criteria"},
            {val: "D", text: "Categories"},
        ],
        answer: "C"
    },
    {
        q: "When moving a homepage or dashboard between instances, what must you remember?",
        options: [
            {val: "A", text: "Manually add them to the update set"},
            {val: "B", text: "They cannot be moved via update set"},
            {val: "C", text: "They are automatically added to the update set"},
            {val: "D", text: "Create a separate update set for them"},
        ],
        answer: "A"
    },
    {
        q: "What is the platform name for the Group table?",
        options: [
            {val: "A", text: "sys_groups"},
            {val: "B", text: "group"},
            {val: "C", text: "sys_user_group"},
            {val: "D", text: "sys_group"},
        ],
        answer: "C"
    },
    {
        q: "Many actions are included with flow designer, what are some frequently used core actions? (Choose four.)",
        options: [
            {val: "A", text: "Look for Update"},
            {val: "B", text: "Create Record"},
            {val: "C", text: "Ask for Approval"},
            {val: "D", text: "Look Up Record"},
            {val: "E", text: "Wait for Condition"},
            {val: "F", text: "Wait for Match"},
        ],
        answer: "B,C,D,E"
    },
    {
        q: "What role enables someone to authorize a request, with no other permissions on the platform?",
        options: [
            {val: "A", text: "Approval Group [approval_group]"},
            {val: "B", text: "Authorize [authorize_user]"},
            {val: "C", text: "Reviewer [reviewer_user]"},
            {val: "D", text: "Verification [verify_user]"},
            {val: "E", text: "Approver [approver_user]"},
        ],
        answer: "E"
    },
    {
        q: "On the knowledge base record, which tab would you use to define which users are not able to write articles to the knowledge base?",
        options: [
            {val: "A", text: "Can Contribute"},
            {val: "B", text: "Cannot Author"},
            {val: "C", text: "Can Read"},
            {val: "D", text: "Can Write"},
            {val: "E", text: "Can Author"},
        ],
        answer: "A"
    },
    {
        q: "What types of entities can receive task assignments, in ServiceNow? (Choose two.)",
        options: [
            {val: "A", text: "Users"},
            {val: "B", text: "Departments"},
            {val: "C", text: "Groups"},
            {val: "D", text: "Teams"},
        ],
        answer: "A,C"
    },
    {
        q: "The Report Designer contains different sections for configuring your report. Which section is used to adjust the look of your report, including colors, titles and legend layout?",
        options: [
            {val: "A", text: "Layout"},
            {val: "B", text: "Format"},
            {val: "C", text: "Configure"},
            {val: "D", text: "Style"},
        ],
        answer: "D"
    },
    {
        q: "How would you distinguish between a Base Class table and a Parent Class table?",
        options: [
            {val: "A", text: "Extended tables are always extended from Parent tables. Extended tables are usually extended from Base tables."},
            {val: "B", text: "Extended tables can be extended from Parent tables or Base tables; but they cannot be extended from both."},
            {val: "C", text: "Base Class tables always have tables extended from them. Parent tables do not have tables extended from them."},
            {val: "D", text: "Base Class table is not extended from another table, Parent class tables may be extended from another table."},
        ],
        answer: "D"
    },
    {
        q: "When a custom table is created, which access control rules are automatically created? (Choose four.)",
        options: [
            {val: "A", text: "create"},
            {val: "B", text: "delete"},
            {val: "C", text: "execute"},
            {val: "D", text: "update"},
            {val: "E", text: "read"},
            {val: "F", text: "write"},
        ],
        answer: "A,B,E,F"
    },
    {
        q: "Which banner icon do you use to change your personal system settings, like your instance color scheme?",
        options: [
            {val: "A", text: "Magnifier"},
            {val: "B", text: "Question mark"},
            {val: "C", text: "Gear"},
            {val: "D", text: "Chat bubbles"},
        ],
        answer: "C"
    },
    {
        q: "Which banner icon do you use to change your personal system settings, like your instance color scheme? (I know it's repeated)",
        options: [
            {val: "A", text: "Magnifier"},
            {val: "B", text: "Question mark"},
            {val: "C", text: "Gear"},
            {val: "D", text: "Chat bubbles"},
        ],
        answer: "C"
    },
    {
        q: "When building an extended table from a base table, which fields do you need to create? (Choose two.)",
        options: [
            {val: "A", text: "The fields that are not in the base table."},
            {val: "B", text: "The mandatory fields for the base table."},
            {val: "C", text: "The fields that are specific to the extended table."},
            {val: "D", text: "The reference fields for the base table."},
        ],
        answer: "A,C"
    },
    {
        q: "While showing a customer their Incident form, they ask to change the Priority field title to display their internal terminology PValue. How would you do that? (Choose two.)",
        options: [
            {val: "A", text: "Right click on Priority and select Configure Label"},
            {val: "B", text: "Right click on Priority and select Configure Dictionary"},
            {val: "C", text: "Right click on Priority and select Configure Display Settings"},
            {val: "D", text: "Right click on Priority and select Configure Column"},
        ],
        answer: "A,B"
    },
    {
        q: "As administrator, what must you do to access features of High Security Settings?",
        options: [
            {val: "A", text: "Impersonate Security Admin"},
            {val: "B", text: "Select Elevate Roles"},
            {val: "C", text: "Add security_admin role to your user account"},
            {val: "D", text: "Use System Administration > Elevate Roles module"},
        ],
        answer: "B"
    },
    {
        q: "What section on the notes tab, shows the history of the work documented on the record?",
        options: [
            {val: "A", text: "Audit Log"},
            {val: "B", text: "Timeline"},
            {val: "C", text: "Journal"},
            {val: "D", text: "Diary"},
            {val: "E", text: "Activity"},
        ],
        answer: "E"
    },
    {
        q: "How would you navigate to the Schema map for a table?",
        options: [
            {val: "A", text: "System Definition > Tables; Select Table; Go to Related links and click Show Schema Map"},
            {val: "B", text: "System Dictionary > Show Schema Map; Select Table"},
            {val: "C", text: "System Definition > Show Schema Map; Select Table"},
            {val: "D", text: "System Definition > Dictionary; Select Table; Go to Related links and click Show Schema Map"},
        ],
        answer: "A"
    },
    {
        q: "Which is the base table of the configuration management database hierarchy?",
        options: [
            {val: "A", text: "cmdb_ci"},
            {val: "B", text: "cmdb"},
            {val: "C", text: "cmdb_rel_ci"},
            {val: "D", text: "ucmdb"},
        ],
        answer: "B"
    },
    {
        q: "Which best describes a field in a ServiceNow table?",
        options: [
            {val: "A", text: "A field is a table row."},
            {val: "B", text: "A field is an item that appears in a menu list."},
            {val: "C", text: "A field is a table cell that stores data."},
            {val: "D", text: "A field is a record in a table."},
        ],
        answer: "C"
    },
    {
        q: "What are examples of UI Actions relating to forms? (Choose three.)",
        options: [
            {val: "A", text: "Form Columns"},
            {val: "B", text: "Form View"},
            {val: "C", text: "Form Buttons"},
            {val: "D", text: "Form Context Menu"},
            {val: "E", text: "Form Links"},
        ],
        answer: "C,D,E"
    },
    {
        q: "Here is an example of the criteria set for a knowledge base: • Companies: ACME North America • Departments: HR • Groups: ACME Managers • Match All: Yes In this example, what users would have access to this knowledge base?",
        options: [
            {val: "A", text: "Members of the ACME Manager group, who are also members of HR Department and part of ACME North America"},
            {val: "B", text: "Employees of ACME North America, who are members of HR Department or the ACME Managers group"},
            {val: "C", text: "Users which are members of either ACME North America, or HR Department, or ACME Managers group"},
            {val: "D", text: "Members of the ACME Managers group, and HR department, regardless of geography"},
        ],
        answer: "A"
    },
    {
        q: "In Flow Designer, where is the data from an action stored so it can be used in subsequent actions in the flow?",
        options: [
            {val: "A", text: "Data Pill"},
            {val: "B", text: "Data Element"},
            {val: "C", text: "Data Trigger"},
            {val: "D", text: "Field Value"},
            {val: "E", text: "Field Icon"},
        ],
        answer: "A"
    },
    {
        q: "A customer has asked for the following updates to a form: • Make Resolution code Mandatory, when state is changed to Resolved • Hide Major Incident check box, unless logged in user has Major Incident Manager role. What type of rule(s) would you use to implement this requirement?",
        options: [
            {val: "A", text: "Form Constraint"},
            {val: "B", text: "UI Design"},
            {val: "C", text: "Field Limiter"},
            {val: "D", text: "UI Policy"},
            {val: "E", text: "Dictionary Design"},
        ],
        answer: "D"
    },
    {
        q: "What setting allows users to view a Knowledge Base article even if they are not logged in?",
        options: [
            {val: "A", text: "The Public setting"},
            {val: "B", text: "The View All setting"},
            {val: "C", text: "The ESS role"},
            {val: "D", text: "The Allow All role"},
        ],
        answer: "A"
    },
    {
        q: "How is the ServiceNow platform set up so that Administrators can easily configure their instances to send an email at the end of an upgrade?",
        options: [
            {val: "A", text: "Administrators can update the email notification named 'System Upgraded' in the System Logs module by adding the appropriate User to receive it."},
            {val: "B", text: "Administrators can update the email notification named 'System Upgraded' in the Notifications module by adding the appropriate User to receive it."},
            {val: "C", text: "Administrators can write a Client Script to send out an email to the Administrator when an Update is complete."},
            {val: "D", text: "Administrators can write a Business Rule to send out an email to the Administrator when an Update is complete."},
        ],
        answer: "B"
    },
    {
        q: "A customer wants to be able to identify and track components of their infrastructure that support their eCommerce service. What ServiceNow products could support this requirement? (Choose three.)",
        options: [
            {val: "A", text: "Asset Management"},
            {val: "B", text: "Discovery"},
            {val: "C", text: "Configuration Management (CMDB)"},
            {val: "D", text: "Service Mapping"},
            {val: "E", text: "Performance Analytics"},
        ],
        answer: "B,C,D"
    },
    {
        q: "For your implementation, the following tables are extended from each other: • Incident table is extended from Task table. • Super Incident table is extended from Incident table. In this situation, which table(s) are Parent, Child and Base tables? (Choose five.)",
        options: [
            {val: "A", text: "Super Incident table is a Parent table"},
            {val: "B", text: "Incident table is a Child table"},
            {val: "C", text: "Super Incident table is a Base table"},
            {val: "D", text: "Incident table is a Base table"},
            {val: "E", text: "Task table is a Child table"},
            {val: "F", text: "Incident table is a Parent table"},
            {val: "G", text: "Super Incident table is a Child table"},
            {val: "H", text: "Task table is a Parent table"},
            {val: "I", text: "Task table is a Base table"},
        ],
        answer: "B,F,G,H,I"
    },
    {
        q: "What capability allows users to create dashboards with widgets to visualize data over time in order to identify areas of improvement?",
        options: [
            {val: "A", text: "Scheduled Reports"},
            {val: "B", text: "Performance Analytics"},
            {val: "C", text: "Analytics Reports"},
            {val: "D", text: "Reporting"},
        ],
        answer: "B"
    },
    {
        q: "Which type of ServiceNow script runs on the web browser?",
        options: [
            {val: "A", text: "Server script"},
            {val: "B", text: "Database script"},
            {val: "C", text: "Client script"},
            {val: "D", text: "Local script"},
        ],
        answer: "C"
    },
    {
        q: "When selecting the Target table for an import, which tables can you select? (Choose three.)",
        options: [
            {val: "A", text: "Tables outside of ServiceNow"},
            {val: "B", text: "Tables within the global scope"},
            {val: "C", text: "Related tables, using Dot Walk"},
            {val: "D", text: "Tables which allow write access to other applications"},
            {val: "E", text: "Tables within the existing application scope"},
        ],
        answer: "B,D,E"
    },
    {
        q: "On Access Control Definitions, what are ways you can set the permissions on a Table? (Choose three.)",
        options: [
            {val: "A", text: "Conditional Expressions"},
            {val: "B", text: "Roles"},
            {val: "C", text: "CRUD"},
            {val: "D", text: "Script that sets the answer variable to true or false"},
            {val: "E", text: "Groups"},
        ],
        answer: "A,B,D"
    },
    {
        q: "What tool is used to import data from various data sources, and map that data into ServiceNow tables?",
        options: [
            {val: "A", text: "Transform Set"},
            {val: "B", text: "Data Pack"},
            {val: "C", text: "Update Set"},
            {val: "D", text: "Import Set"},
        ],
        answer: "D"
    },
    {
        q: "When you set a policy that is applied to all data entered into the platform (UI, Import Sets, or Web Services), where does this policy run by default?",
        options: [
            {val: "A", text: "Client"},
            {val: "B", text: "Network"},
            {val: "C", text: "Browser"},
            {val: "D", text: "Server"},
        ],
        answer: "D"
    },
    {
        q: "On what part of the ServiceNow instance, would you find the option to Impersonate User?",
        options: [
            {val: "A", text: "User Menu"},
            {val: "B", text: "Content Frame"},
            {val: "C", text: "Application Navigator"},
            {val: "D", text: "Module"},
        ],
        answer: "A"
    },
    {
        q: "How would you describe the relationship between the Incident and Task table?",
        options: [
            {val: "A", text: "Incident table has a one to many relationship with the Task table"},
            {val: "B", text: "Incident table is extended from Task table"},
            {val: "C", text: "Incident table is related to the Task table via the INC number"},
            {val: "D", text: "Incident table has a many to many relationship with the Task table"},
            {val: "E", text: "Incident table is a database view of the Task table"},
        ],
        answer: "B"
    },
    {
        q: "Which flow components allow you to specify when a flow should be run?",
        options: [
            {val: "A", text: "Trigger and Condition Pill"},
            {val: "B", text: "Condition and Table"},
            {val: "C", text: "Trigger Criteria and Clock"},
            {val: "D", text: "Trigger and Condition"},
            {val: "E", text: "Scope and Trigger Condition"},
        ],
        answer: "D"
    },
    {
        q: "Which feature helps to automatically allocate a critical, high-priority, service request to the appropriate assignment group or team member?",
        options: [
            {val: "A", text: "Assignment Rule"},
            {val: "B", text: "User Policy"},
            {val: "C", text: "Predictive Intelligence"},
            {val: "D", text: "UI Policy"},
        ],
        answer: "A"
    },
    {
        q: "The Report Designer contains different sections for configuring your report. Which section is used to specify the name of the report, and the table or data source for the report?",
        options: [
            {val: "A", text: "Type"},
            {val: "B", text: "Properties"},
            {val: "C", text: "Configure"},
            {val: "D", text: "Sources"},
            {val: "E", text: "Data"},
        ],
        answer: "B"
    },
    {
        q: "You are editing a new incident record and would like the 'Save' button to be located on the Form header. Which action would need to be taken for that button to appear?",
        options: [
            {val: "A", text: "Context Menu > Form Design > add the 'Save' button."},
            {val: "B", text: "All > System Properties > UI Properties > Turn on the 'glide.ui.advanced' property."},
            {val: "C", text: "All > System Properties > UI Properties > Turn on the 'Save' button."},
            {val: "D", text: "Context Menu > Form Layout > add the 'Save' button."},
        ],
        answer: "C"
    },
    {
        q: "Which feature ensures data consistency while importing data using import sets and web services?",
        options: [
            {val: "A", text: "UI Policy"},
            {val: "B", text: "Data Policy"},
            {val: "C", text: "Business Rule"},
            {val: "D", text: "Client Script"},
            {val: "E", text: "CSDM"},
        ],
        answer: "C"
    },
    {
        q: "When using Flow Designer, what is the Flow Execution initiated by?",
        options: [
            {val: "A", text: "A flow logic"},
            {val: "B", text: "An existing subflow"},
            {val: "C", text: "An execution data pill"},
            {val: "D", text: "A trigger"},
        ],
        answer: "D"
    },
    {
        q: "What is the name of the string that displays filter criteria?",
        options: [
            {val: "A", text: "Breadcrumb"},
            {val: "B", text: "Choice"},
            {val: "C", text: "Menu"},
            {val: "D", text: "Topic"},
        ],
        answer: "A"
    },
    {
        q: "Which system property is added and set to true in order to see impersonation events in the System Log?",
        options: [
            {val: "A", text: "glide.sys.all_impersonation"},
            {val: "B", text: "glide.user_setting"},
            {val: "C", text: "glide.impersonation_setting"},
            {val: "D", text: "glide.sys.log_impersonation"},
            {val: "E", text: "glide.sys.admin_login"},
        ],
        answer: "D"
    },
    {
        q: "What process allows users to create, categorize, review, approve and browse important information in a centralized location that is shared by the entire organization?",
        options: [
            {val: "A", text: "Self Service Management"},
            {val: "B", text: "Knowledge Management"},
            {val: "C", text: "Business Information Management"},
            {val: "D", text: "Information Portal Management"},
            {val: "E", text: "Knowledge-Centered Management"},
        ],
        answer: "B"
    },
    {
        q: "A colleague wants to rearrange the columns on their My Work List. Once the user has navigated to the list, where should they navigate to select and arrange the columns?",
        options: [
            {val: "A", text: "Right click on any column header, Context Menu > Configure > List Layout"},
            {val: "B", text: "Click List Context Menu > Configure > List Layout"},
            {val: "C", text: "Click List Context Menu > Personalize List"},
            {val: "D", text: "Click Personalize List"},
        ],
        answer: "D"
    },
    {
        q: "You are looking at a list of Active Incidents. You want to exclude Incidents with the state of Resolved. How might you do that?",
        options: [
            {val: "A", text: "On Search, select State, type not Resolved, press enter"},
            {val: "B", text: "On State column title, right-click, select Filter Out > Resolved"},
            {val: "C", text: "On the list of records, locate and right-click on the Resolved value, select Filter Out"},
            {val: "D", text: "On the list of records, locate and right-click on the Resolved value, select Exclude"},
            {val: "E", text: "Click Funnel icon, click AND, Select Resolved, is Not, State, click Run"},
        ],
        answer: "C"
    },
    {
        q: "Roles can inherit permissions from other roles. Which role inherits all of the permissions of the catalog role, and the user_criteria_admin role, plus has permissions to create Items and Services?",
        options: [
            {val: "A", text: "Sys Admin [sys_admin]"},
            {val: "B", text: "Catalog Admin [catalog_admin]"},
            {val: "C", text: "Catalog Author [sn_catalog_write]"},
            {val: "D", text: "Item Admin [sn_item_admin]"},
        ],
        answer: "B"
    },
    {
        q: "What component of the ServiceNow infrastructure defines every table and field in the system?",
        options: [
            {val: "A", text: "Schema"},
            {val: "B", text: "Field Map"},
            {val: "C", text: "Table Class Manager"},
            {val: "D", text: "Dictionary"},
            {val: "E", text: "Data Atlas"},
        ],
        answer: "D"
    },
    {
        q: "Which data consistency settings can be achieved using UI Policy? (Choose three.)",
        options: [
            {val: "A", text: "Setting fields to accept the data in an expected format"},
            {val: "B", text: "Setting fields to accept the data with ‘n’ number of characters"},
            {val: "C", text: "Setting fields hidden"},
            {val: "D", text: "Settings fields read-only"},
            {val: "E", text: "Setting fields mandatory"},
        ],
        answer: "C,D,E"
    },
    {
        q: "A customer wants to use a client script to validate things on a form in order to make sure the submission makes sense. What type of client script would you recommend to meet this requirement?",
        options: [
            {val: "A", text: "onSubmit()"},
            {val: "B", text: "onSubmission()"},
            {val: "C", text: "onUpdate()"},
            {val: "D", text: "onLoad()"},
        ],
        answer: "A"
    },
    {
        q: "An order from the Service Catalog has been placed. Two records in the Platform are created as a result. Which two records are associated with this newly ordered item? (Choose two.)",
        options: [
            {val: "A", text: "A record of sc_req_item table"},
            {val: "B", text: "A record of sc_task"},
            {val: "C", text: "An incident record"},
            {val: "D", text: "A change record"},
            {val: "E", text: "A problem record"},
        ],
        answer: "A,B"
    },
    {
        q: "What action will allow you to personalize layouts of columns in a list?",
        options: [
            {val: "A", text: "Context Menu > View > Personalize"},
            {val: "B", text: "Click Gear Icon > Personalize window options > Select the appropriate columns"},
            {val: "C", text: "Select the column to be personalized and right at the header > Choose the options to personalize"},
            {val: "D", text: "Select the column to be personalized > Click Edit icon (Pencil) > Choose the options to personalize"},
        ],
        answer: "B"
    },
    {
        q: "An order for new office equipment has been placed through the Service Catalog. How would you view the lists of requests after the orders have been placed?",
        options: [
            {val: "A", text: "All > Tables and Columns > Tasks"},
            {val: "B", text: "In the Navigation Filter, type 'requests.list' and press the Enter key"},
            {val: "C", text: "All > Service Catalog > Requests"},
            {val: "D", text: "All > Service Catalog > Open Records > Items"},
        ],
        answer: "C"
    },
    {
        q: "Which path would you take to access the table configuration page from a form?",
        options: [
            {val: "A", text: "The Form Context menu > View > Show Table"},
            {val: "B", text: "The Form Context menu > View > Table"},
            {val: "C", text: "The Form Context menu > Configure > Dictionary"},
            {val: "D", text: "The Form Context menu > Configure > Table"},
        ],
        answer: "D"
    },
    {
        q: "Which admin role is required to make changes to High Security Settings?",
        options: [
            {val: "A", text: "high_sec_admin"},
            {val: "B", text: "sn_acl_admin"},
            {val: "C", text: "admin"},
            {val: "D", text: "security_admin"},
        ],
        answer: "D"
    },
    {
        q: "What is the most common role that has access to almost all platform features, functions, and data?",
        options: [
            {val: "A", text: "Super User [sn_super_user]"},
            {val: "B", text: "Security Admin [security_admin]"},
            {val: "C", text: "System Administrator [admin]"},
            {val: "D", text: "Base Admin [base_admin]"},
            {val: "E", text: "System Manager [sys_manager]"},
        ],
        answer: "C"
    },
    {
        q: "When moving multiple update sets at one time, what might you do to facilitate the move?",
        options: [
            {val: "A", text: "Preview"},
            {val: "B", text: "Batch"},
            {val: "C", text: "List"},
            {val: "D", text: "Map"},
        ],
        answer: "B"
    },
    {
        q: "What do you click when you have made modifications to your report, and you want to see the results without saving?",
        options: [
            {val: "A", text: "Preview"},
            {val: "B", text: "Test"},
            {val: "C", text: "Run"},
            {val: "D", text: "Try It"},
            {val: "E", text: "Execute"},
        ],
        answer: "C"
    },
    {
        q: "Which framework can automatically populate values for the Priority and Category fields based on the Short description field value?",
        options: [
            {val: "A", text: "Predictive Intelligence"},
            {val: "B", text: "Assignment Rule"},
            {val: "C", text: "CSDM"},
            {val: "D", text: "Action"},
            {val: "E", text: "UI Policy"},
        ],
        answer: "A"
    },
    {
        q: "Which testing framework is used to test ServiceNow Applications?",
        options: [
            {val: "A", text: "Test Driven Framework (TDF)"},
            {val: "B", text: "Junit"},
            {val: "C", text: "Selenium"},
            {val: "D", text: "Automated Test Framework (ATF)"},
        ],
        answer: "D"
    },
    {
        q: "Which allows the creation of a task-based record from Service Catalog?",
        options: [
            {val: "A", text: "Assignment Rule"},
            {val: "B", text: "Flow Designer"},
            {val: "C", text: "UI Builder"},
            {val: "D", text: "Record Producers"},
        ],
        answer: "D"
    },
    {
        q: "What module do you use to access the reports that are available to you?",
        options: [
            {val: "A", text: "Self-Service > My Reports"},
            {val: "B", text: "Self-Service > My Dashboards"},
            {val: "C", text: "Reports > View / Run"},
            {val: "D", text: "Reports > Homepage"},
            {val: "E", text: "Reports > Overview"},
        ],
        answer: "C"
    },
    {
        q: "Security rules are defined to restrict the permissions of users from viewing and interacting with data. What are these security rules called?",
        options: [
            {val: "A", text: "CRUD Rules"},
            {val: "B", text: "Access Control Rules"},
            {val: "C", text: "Role Assignment Rules"},
            {val: "D", text: "Scripted User Rules"},
            {val: "E", text: "User Authentication Rules"},
        ],
        answer: "B"
    },
    {
        q: "A new employee joins the IT department and needs to perform work assigned to Network and Hardware groups. How would you set up their access? (Choose three.)",
        options: [
            {val: "A", text: "Add User Account to Hardware group"},
            {val: "B", text: "Add User Account to IT Knowledgebase"},
            {val: "C", text: "Create User Account"},
            {val: "D", text: "Add User Account to itil group"},
            {val: "E", text: "Add User Account to Network group"},
            {val: "F", text: "Add User Account to ACL"},
        ],
        answer: "A,C,E"
    },
    {
        q: "The customer has asked that you change the default layout of the Task list. They would like these columns, in this order:  • Number • Task Type • Parent • Short Description • Assignment Group • Assignee • Updated  After navigating to the list, where would you click to meet this requirement?",
        options: [
            {val: "A", text: "Click List Context Menu > Personalize List"},
            {val: "B", text: "Click List Context Menu > Configure > Columns"},
            {val: "C", text: "Right click List Gear icon > Configure > Columns"},
            {val: "D", text: "Right click on any column header, Context Menu > Configure > List Layout"},
        ],
        answer: "D"
    },
    {
        q: "Which ServiceNow capability allows you to provide knowledge articles via a conversational messaging interface?",
        options: [
            {val: "A", text: "Agent Assist"},
            {val: "B", text: "Virtual Agent"},
            {val: "C", text: "Now Messenger"},
            {val: "D", text: "Instance Chat"},
        ],
        answer: "B"
    },
    {
        q: "On the Form header, which element allows you to access form templates?",
        options: [
            {val: "A", text: "Stamp"},
            {val: "B", text: "More Options (...)"},
            {val: "C", text: "Pages"},
            {val: "D", text: "Paperclip"},
        ],
        answer: "B"
    },
    {
        q: "What is the definition of a group?",
        options: [
            {val: "A", text: "A collection of subject matter experts"},
            {val: "B", text: "A department"},
            {val: "C", text: "An escalation pod"},
            {val: "D", text: "A collection of users"},
            {val: "E", text: "A collection of tasks"},
        ],
        answer: "D"
    },
    {
        q: "Which ServiceNow utility provides a modern interactive graphical interface to visualize configuration items and their relationships?",
        options: [
            {val: "A", text: "Flow Design"},
            {val: "B", text: "CI Class Map"},
            {val: "C", text: "Dependency View"},
            {val: "D", text: "Business Service Map"},
        ],
        answer: "C"
    },
    {
        q: "What icon do you use to change the label on a Favorite?",
        options: [
            {val: "A", text: "Star"},
            {val: "B", text: "Clock"},
            {val: "C", text: "Triangle"},
            {val: "D", text: "Pencil"},
        ],
        answer: "D"
    },
    {
        q: "Which tool is used to define relationships between fields in an import set table and a target table?",
        options: [
            {val: "A", text: "Schema Map"},
            {val: "B", text: "Field Transformer"},
            {val: "C", text: "Transform Map"},
            {val: "D", text: "Transform Schema"},
        ],
        answer: "C"
    },
    {
        q: "When moving a homepage or dashboard between instances, what must you remember?",
        options: [
            {val: "A", text: "Download both as PDF and XML files"},
            {val: "B", text: "They cannot be moved via update set"},
            {val: "C", text: "The Platform will automatically add them to the update set"},
            {val: "D", text: "Manually add them to the update set"},
        ],
        answer: "D"
    },
    {
        q: "Which allows the creation of a task-based record from Service Catalog?",
        options: [
            {val: "A", text: "Record Producers"},
            {val: "B", text: "UI Builder"},
            {val: "C", text: "Assignment Rule"},
            {val: "D", text: "UI Actions"},
            {val: "E", text: "Flow Designer"},
        ],
        answer: "A"
    },
    {
        q: "On the knowledge base record, which tab would you use to define which users are able to write articles to the knowledge base?",
        options: [
            {val: "A", text: "Can Contribute"},
            {val: "B", text: "Cannot Author"},
            {val: "C", text: "Can Read"},
            {val: "D", text: "Can Write"},
            {val: "E", text: "Can Author"},
        ],
        answer: "A"
    },
    {
        q: "Which type of scripts run in the browser?",
        options: [
            {val: "A", text: "UI Policies"},
            {val: "B", text: "Script Include Scripts"},
            {val: "C", text: "Access Control Scripts"},
            {val: "D", text: "Business Rule Scripts"},
        ],
        answer: "A"
    },
    {
        q: "What enables you to trace the connection from an infrastructure item, like a Server, to the Services that are dependent on that Server?",
        options: [
            {val: "A", text: "Automapping Utility"},
            {val: "B", text: "Relationships"},
            {val: "C", text: "Service Tracer"},
            {val: "D", text: "Transform Map"},
        ],
        answer: "B"
    },
    {
        q: "What section on a task record is used to see the most recent updates made to a record?",
        options: [
            {val: "A", text: "Timeline"},
            {val: "B", text: "Related List"},
            {val: "C", text: "Activity Stream"},
            {val: "D", text: "Audit Log"},
        ],
        answer: "C"
    },
    {
        q: "While using the CMDB, what do you call the component that needs to be managed in order to deliver services?",
        options: [
            {val: "A", text: "Configuration Item"},
            {val: "B", text: "Asset"},
            {val: "C", text: "Catalog Items"},
            {val: "D", text: "Data Plow"},
            {val: "E", text: "Service Offerings"},
        ],
        answer: "A"
    },
    {
        q: "What is the first step in the process to import spreadsheet data into ServiceNow?",
        options: [
            {val: "A", text: "Select Import Set"},
            {val: "B", text: "Run Data Scrubber"},
            {val: "C", text: "Define Data Source"},
            {val: "D", text: "Create Import Set"},
            {val: "E", text: "Set Coalesce"},
        ],
        answer: "D"
    },
    {
        q: "What are the steps for importing data using an import set?",
        options: [
            {val: "A", text: "Create Import Set; Create transform map; Transform data; Clean up import table"},
            {val: "B", text: "Create a Transform Map, Load Data, Transform Data, Run Transform Map Script"},
            {val: "C", text: "Identify source; Import transform map; Run transformer; Verify import"},
            {val: "D", text: "Select source file; Run AutoMap; Transform data; Clean up target table"},
        ],
        answer: "A"
    },
    {
        q: "If users would like to locate and assign a task to themselves in the Platform, what action could they perform from the list view to make the assignment? (Choose two.)",
        options: [
            {val: "A", text: "Select the record using the check box, then select the Person icon"},
            {val: "B", text: "Select the record using the check box then select the Assign To Me UI action on the List Header"},
            {val: "C", text: "Double click on the Assigned to value, type the name of the user, and select the green check"},
            {val: "D", text: "Right click on the Task number and select the Assign to me option in the menu"},
            {val: "E", text: "Select the Task number, and select the Assign to me UI action on the form"},
        ],
        answer: "C,D"
    },
    {
        q: "What module enables an administrator to define destinations for imported data on any ServiceNow table?",
        options: [
            {val: "A", text: "Load Data"},
            {val: "B", text: "Field Transform"},
            {val: "C", text: "Schema Map"},
            {val: "D", text: "Transform Map"},
        ],
        answer: "D"
    },
    {
        q: "Which ServiceNow capability provides assistance to help users obtain information, make decisions, and perform common work tasks via a messaging interface?",
        options: [
            {val: "A", text: "Now Support"},
            {val: "B", text: "ServiceNow Messenger"},
            {val: "C", text: "Agent Workspace"},
            {val: "D", text: "Virtual Agent"},
            {val: "E", text: "Knowledge Chat"},
        ],
        answer: "D"
    },
    {
        q: "What instance resource allows you to access guided tours, information about actions, and instructions on how to use inputs and outputs in your flow?",
        options: [
            {val: "A", text: "Now Support"},
            {val: "B", text: "Community"},
            {val: "C", text: "Docs"},
            {val: "D", text: "Help Panel (question mark icon)"},
        ],
        answer: "D"
    },
    {
        q: "When importing data from a spreadsheet, which step defines where the incoming data columns will be written in the receiving table?",
        options: [
            {val: "A", text: "Select Data Source"},
            {val: "B", text: "Schedule Transform"},
            {val: "C", text: "Load Data"},
            {val: "D", text: "Create Transform Map"},
            {val: "E", text: "Field Alignment"},
        ],
        answer: "D"
    },
    {
        q: "On a form header, what icon would you click to access Template features?",
        options: [
            {val: "A", text: "Context Menu"},
            {val: "B", text: "Paper clip"},
            {val: "C", text: "Stamp"},
            {val: "D", text: "More options (...)"},
        ],
        answer: "D"
    },
    {
        q: "Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that applies to the entire Incident table (all rows and fields)?",
        options: [
            {val: "A", text: "incident.*"},
            {val: "B", text: "incident.all"},
            {val: "C", text: "incident.!"},
            {val: "D", text: "incident.None"},
        ],
        answer: "D"
    },
    {
        q: "Which action enables personalization in a form for the admin role, only?",
        options: [
            {val: "A", text: "Navigate to sys_form_properties.list and set the property glide.ui.enable_personalize_form.admin to true."},
            {val: "B", text: "Navigate to Context Menu > Configure > Form Layout and select ‘Enable Personalization’ and Enter the ‘admin’ role."},
            {val: "C", text: "Navigate to Context Menu > Configure > Table and add the role ‘Admin’ in the ‘Available User’ list box."},
            {val: "D", text: "Navigate to sys_properties.list find the property glide.ui.personalize_form.role and set the Value to admin."},
        ],
        answer: "D"
    },
    {
        q: "Which element is used to track items not saved with a field, in a record?",
        options: [
            {val: "A", text: "Sidebar"},
            {val: "B", text: "List Editor"},
            {val: "C", text: "Activity formatter"},
            {val: "D", text: "Dictionary"},
        ],
        answer: "C"
    },
    {
        q: "What does ServiceNow recommend as a best practice regarding data imports?",
        options: [
            {val: "A", text: "Adjust your Transform maps, after the data is loaded into the target table."},
            {val: "B", text: "Use extremely large Import Sets, instead of multiple large Import Sets."},
            {val: "C", text: "Create a new Import set table for each new data load."},
            {val: "D", text: "Plan time before your import to remove obsolete or inaccurate data."},
            {val: "E", text: "Monitor data quality and clean imported data, using the Data Scrub Workspace."},
        ],
        answer: "D"
    },
    {
        q: "If a user is on an Incident form and is alerted when they change the value of the Priority field, which type of script executes in the Platform?",
        options: [
            {val: "A", text: "A server script"},
            {val: "B", text: "A client script"},
            {val: "C", text: "A fix script"},
            {val: "D", text: "A business rule"},
        ],
        answer: "B"
    },
    {
        q: "What are the benefits of building flows using Flow Designer? (Choose three.)",
        options: [
            {val: "A", text: "Provides IDE for complicated scripting"},
            {val: "B", text: "Provides built-in libraries /API for complex coding"},
            {val: "C", text: "Automatically populates SLA records"},
            {val: "D", text: "Provides natural-language descriptions of flow logic"},
            {val: "E", text: "Supports No-Code application development"},
            {val: "F", text: "Supports easy integration with 3rd party systems"},
        ],
        answer: "D,E,F"
    },
    {
        q: "What contains the configuration changes made in an instance (i.e. changes in a form) and helps to implement the changes from the Dev environment to another environment?",
        options: [
            {val: "A", text: "Update sets"},
            {val: "B", text: "Transform maps"},
            {val: "C", text: "System dictionaries"},
            {val: "D", text: "Import sets"},
        ],
        answer: "A"
    },
    {
        q: "Which tables are children of the Task table and come with the base system? (Choose three.)",
        options: [
            {val: "A", text: "Config"},
            {val: "B", text: "Problem"},
            {val: "C", text: "Dictionary"},
            {val: "D", text: "cmdb"},
            {val: "E", text: "Incident"},
            {val: "F", text: "Change Request"},
        ],
        answer: "B,E,F"
    },
    {
        q: "An administrator creates 'customer_table_admin' and 'customer_table_user' roles for the newly created 'Customer Table'. Which ACL rule would grant access to all rows and all fields to both the customer_table_admin and customer_table_user roles?",
        options: [
            {val: "A", text: "customer.none"},
            {val: "B", text: "customer.all"},
            {val: "C", text: "customer.field"},
            {val: "D", text: "customer.*"},
        ],
        answer: "A"
    },
    {
        q: "Which tables are available by default in a ServiceNow instance? (Choose three.)",
        options: [
            {val: "A", text: "User"},
            {val: "B", text: "Issue"},
            {val: "C", text: "Incident"},
            {val: "D", text: "Project"},
            {val: "E", text: "Task"},
            {val: "F", text: "Item"},
        ],
        answer: "A,C,E"
    },
    {
        q: "In a Knowledge Base record, where can an administrator find the User Criteria for who can read the articles?",
        options: [
            {val: "A", text: "From the Accessible to tab"},
            {val: "B", text: "From the Available to tab"},
            {val: "C", text: "From the Can Access tab"},
            {val: "D", text: "From the Can Read tab"},
        ],
        answer: "D"
    },
    {
        q: "What action helps to see which modules are visible to a user?",
        options: [
            {val: "A", text: "Install the Bomgar plug-in"},
            {val: "B", text: "Initiate a Connect Chat session"},
            {val: "C", text: "Launch a NowChat window"},
            {val: "D", text: "Impersonate the user"},
        ],
        answer: "D"
    },
    {
        q: "What are the different Notification methods that can be used to alert users when events that concern them have occurred? (Choose three.)",
        options: [
            {val: "A", text: "Meeting Invitation"},
            {val: "B", text: "Email"},
            {val: "C", text: "Browser Pop ups"},
            {val: "D", text: "Messenger"},
            {val: "E", text: "SMS"},
        ],
        answer: "A,B,E"
    },
    {
        q: "Which feature can be used to give users the choice to easily populate the most-used fields for a specific table?",
        options: [
            {val: "A", text: "Tags"},
            {val: "B", text: "Formatter"},
            {val: "C", text: "Template"},
            {val: "D", text: "Reference type fields"},
        ],
        answer: "C"
    },
    {
        q: "The wait time for end users is based on the round-trip between the client and the server. What activities are included in the round-trips?",
        options: [
            {val: "A", text: "Submit + Query"},
            {val: "B", text: "Request + Response"},
            {val: "C", text: "Insert + Verify"},
            {val: "D", text: "Write + Read"},
            {val: "E", text: "Save + Update"},
        ],
        answer: "B"
    },
    {
        q: "Which module in the Service Catalog application is used to create a new catalog item?",
        options: [
            {val: "A", text: "Configuration Items"},
            {val: "B", text: "Maintain Items"},
            {val: "C", text: "Content Items"},
            {val: "D", text: "Catalog Items"},
        ],
        answer: "B"
    },
    {
        q: "Which displays the list of activities, or history, on a form?",
        options: [
            {val: "A", text: "Formatter"},
            {val: "B", text: "Dictionary"},
            {val: "C", text: "Sidebar"},
            {val: "D", text: "History Menu"},
        ],
        answer: "A"
    },
    {
        q: "Where should an administrator navigate to add the 'Save' button in the form header?",
        options: [
            {val: "A", text: "Context Menu > Form Design"},
            {val: "B", text: "All > System Properties > UI Action Settings"},
            {val: "C", text: "All > System Properties > UI Properties"},
            {val: "D", text: "Context Menu > Form Layout"},
        ],
        answer: "C"
    },
    {
        q: "What are the options that can be set to determine when a Business Rule executes? (Choose four.)",
        options: [
            {val: "A", text: "Async"},
            {val: "B", text: "Load"},
            {val: "C", text: "Change"},
            {val: "D", text: "Display"},
            {val: "E", text: "After"},
            {val: "F", text: "Before"},
            {val: "G", text: "Submit"},
            {val: "H", text: "Click"},
        ],
        answer: "A,D,E,F"
    }
];
