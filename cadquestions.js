const questions = [
  {
    q: `Which of the following statements is true for the Form Designer?

a) To add a field to the form layout, drag the field from the Fields tab to the desired destination on the form.
b) To create a new field on a form's table, drag the appropriate data type from the Field Types tab to the form and then configure the new field.
c) To remove a field from the form layout, hover over the field to enable the Action buttons, and select the Delete (X) button.
d) To add a section to the form layout, drag it from the Field Types tab to the desired destination on the form.`,
    options: [
      { val: "A", text: "a, b, c, and d" },
      { val: "B", text: "b, c, and d" },
      { val: "C", text: "a, b, and d" },
      { val: "D", text: "a, b, and c" }
    ],
    answer: "D"
  },

  {
    q: `Which of the following are configured in an Email Notification?

a) Who will receive the notification.
b) What content will be in the notification.
c) When to send the notification.
d) How to send the notification.`,
    options: [
      { val: "A", text: "a, b and c" },
      { val: "B", text: "a,b and d" },
      { val: "C", text: "b, c and d" },
      { val: "D", text: "a, c and d" }
    ],
    answer: "A"
  },

  {
    q: `To see what scripts, reports, and other application artifacts will be in a published application:`,
    options: [
      { val: "A", text: "Enter the name of the Application in the Global search field" },
      { val: "B", text: "Open the list of Update Sets for the instance" },
      { val: "C", text: "Examine the Application Files Related List in the application to be published" },
      { val: "D", text: "Open the artifact records individually to verify the value in the Application field" }
    ],
    answer: "C"
  },

  {
    q: `When creating new application files in a scoped application, cross scope access is turned on by default in which of the following?`,
    options: [
      { val: "A", text: "REST messages" },
      { val: "B", text: "Table" },
      { val: "C", text: "Script Include" },
      { val: "D", text: "Workflow" }
    ],
    answer: "B"
  },

  {
    q: `Which of the following are true for reports in ServiceNow? (Choose three.)`,
    options: [
      { val: "A", text: "Any user can see any report shared with them." },
      { val: "B", text: "Can be a graphical representation of data." },
      { val: "C", text: "All users can generate reports on any table." },
      { val: "D", text: "Can be run on demand by authorized users." },
      { val: "E", text: "Can be scheduled to be run and distributed by email." }
    ],
    answer: "B,D,E"
  },

  {
    q: `Which one of the following is NOT a debugging strategy for client-side scripts?`,
    options: [
      { val: "A", text: "g_form.addInfoMessage()" },
      { val: "B", text: "Field Watcher" },
      { val: "C", text: "jslog()" },
      { val: "D", text: "gs.log()" }
    ],
    answer: "D"
  },

  {
    q: `When configuring the content of an Email Notification, which syntax should be used to reference the properties of an event triggering the Notification?`,
    options: [
      { val: "A", text: "${event.<property name>}" },
      { val: "B", text: "${current.<property name>}" },
      { val: "C", text: "${<property name>.getDisplayValue()}" },
      { val: "D", text: "${gs.<property name>}" }
    ],
    answer: "A"
  },

  {
    q: `In a Business Rule, which one of the following returns true if the currently logged in user has the admin role?`,
    options: [
      { val: "A", text: "g_form.hasRoleExactly('admin')" },
      { val: "B", text: "gs.hasRole('admin')" },
      { val: "C", text: "g_form.hasRole('admin')" },
      { val: "D", text: "gs.hasRoleExactly('admin')" }
    ],
    answer: "B"
  },

  {
    q: `From the list below, identify one reason an application might NOT be a good fit with ServiceNow.

The application:`,
    options: [
      { val: "A", text: "Needs workflow to manage processes" },
      { val: "B", text: "Requires use of low-level programming libraries" },
      { val: "C", text: "Requires reporting capabilities" },
      { val: "D", text: "Uses forms extensively to interact with data" }
    ],
    answer: "B"
  },

  {
    q: `Identify the incorrect statement about Delegated Development in ServiceNow`,
    options: [
      { val: "A", text: "Administrators can grant non-admin users the ability to develop global applications." },
      { val: "B", text: "Administrators can specify which application file types the developer can access." },
      { val: "C", text: "Administrators can grant the developer access to script fields." },
      { val: "D", text: "Administrators can grant the developer access to security records." }
    ],
    answer: "A"
  },

  {
    q: `Which of the following is NOT a trigger type in Flow Designer?`,
    options: [
        { val: "A", text: "Outbound Email" },
        { val: "B", text: "Application" },
        { val: "C", text: "Record" },
        { val: "D", text: "Schedule" }
    ],
    answer: "A"
},

{
    q: `One of the uses of the ServiceNow REST API Explorer is:`,
    options: [
        { val: "A", text: "Practice using REST to interact with public data providers" },
        { val: "B", text: "Find resources on the web for learning about REST" },
        { val: "C", text: "Convert SOAP Message functions to REST methods" },
        { val: "D", text: "Create sample code for sending REST requests to ServiceNow" }
    ],
    answer: "D"
},

{
    q: `Which one of the following is true regarding Application Scope?`,
    options: [
        { val: "A", text: "All applications are automatically part of the Global scope" },
        { val: "B", text: "Applications downloaded from 3 party ServiceNow application developers cannot have naming conflicts" },
        { val: "C", text: "Any developer can edit any application" },
        { val: "D", text: "Developers can choose the prefix for a scope's namespace" }
    ],
    answer: "B"
},

{
    q: `Which one of the following is the baseline behavior of a table in a privately-scoped application?`,
    options: [
        { val: "A", text: "The table and its data are not accessible using web services" },
        { val: "B", text: "Any Business Rule can read, write, delete, and update from the table" },
        { val: "C", text: "Only artifacts in the table's application can read from the table" },
        { val: "D", text: "All application scopes can read from the table" }
    ],
    answer: "D"
},

{
    q: `Which one of the following is NOT a purpose of application scoping?`,
    options: [
        { val: "A", text: "Provide a relationship between application artifacts" },
        { val: "B", text: "Provide a way of tracking the user who developed an application" },
        { val: "C", text: "Provide a namespace (prefix and scope name) to prevent cross application name collisions" },
        { val: "D", text: "Provide controls for how scripts from another scope can alter tables in a scoped application" }
    ],
    answer: "B"
},

{
    q: `Which of the following statements does NOT apply when extending an existing table?`,
    options: [
        { val: "A", text: "The parent table's Access Controls are evaluated when determining access to the new table's records and fields" },
        { val: "B", text: "The new table inherits the functionality built into the parent table" },
        { val: "C", text: "The new table inherits all of the fields from the parent table" },
        { val: "D", text: "You must script and configure all required behaviors" }
    ],
    answer: "D"
},

{
    q: `Application developers configure ServiceNow using industry standard JavaScript to`,
    options: [
        { val: "A", text: "Enable the right-click to edit the context menus on applications in the navigator" },
        { val: "B", text: "Extend and add functionality" },
        { val: "C", text: "Customize the organization's company logo and banner text" },
        { val: "D", text: "Configure the outgoing email display name" }
    ],
    answer: "B"
},

{
    q: `How many applications menus can an application have?`,
    options: [
        { val: "A", text: "one for an application's user modules, one for an application's administrator modules, and one for the ServiceNow administrator's modules" },
        { val: "B", text: "As many as the application design requires" },
        { val: "C", text: "one for an application's user modules and one for an application's administrator modules" },
        { val: "D", text: "which is used for all application modules" }
    ],
    answer: "B"
},

{
    q: `Which Application Access configuration field(s) are NOT available if the Can read configuration field is NOT selected?`,
    options: [
        { val: "A", text: "All access to this table via web services" },
        { val: "B", text: "Can create, Can update, and Can delete" },
        { val: "C", text: "Can read does not affect the availability of other Application Access fields" },
        { val: "D", text: "Allow configuration" }
    ],
    answer: "B"
},

{
    q: `What syntax is used in a Record Producer script to access values from Record Producer form fields?`,
    options: [
        { val: "A", text: "producer.field_name" },
        { val: "B", text: "producer.variablename" },
        { val: "C", text: "current.variable_name" },
        { val: "D", text: "current.field_name" }
    ],
    answer: "B"
},
{
    q: `In an Email Notification, which one of the following is NOT true for the Weight field?`,
    options: [
        { val: "A", text: "Only Notifications with the highest weight for the same record and recipients are sent" },
        { val: "B", text: "A Weight value of zero means that no email should be sent" },
        { val: "C", text: "The Weight value defaults to zero" },
        { val: "D", text: "A Weight value of zero means the Notification is always sent when the Notification's When to send criteria is met" }
    ],
    answer: "B"
},

{
    q: `How can a developer extract data from the response body after calling a REST web service?`,
    options: [
        { val: "A", text: "Use the Convert Response Body wizard to translate the response into an object" },
        { val: "B", text: "Use the XMLDocument2 Script Include to parse the XML" },
        { val: "C", text: "Click the Convert Response Body button to convert the response" },
        { val: "D", text: "Use the XMLDocument2 API to extract data from XML formatted responses" },
        { val: "E", text: "Use the JSON API to convert JSON formatted responses to a JavaScript object" }
    ],
    answer: "D,E"
},

{
    q: `Which one of the following is true?`,
    options: [
        { val: "A", text: "A UI Policy's Actions execute before the UI Policy's Scripts" },
        { val: "B", text: "The execution order for a UI Policy's Scripts and Actions is determined at runtime" },
        { val: "C", text: "A UI Policy's Scripts execute before the UI Policy's Actions" },
        { val: "D", text: "A UI Policy's Actions and Scripts execute at the same time" }
    ],
    answer: "A"
},

{
    q: `Which of the following objects does a Display Business Rule NOT have access to?`,
    options: [
        { val: "A", text: "Previous" },
        { val: "B", text: "GlideSystem" },
        { val: "C", text: "g_scratchpad" },
        { val: "D", text: "Current" }
    ],
    answer: "A"
},

{
    q: `Which of the following features are available to Global applications? (Choose two.)`,
    options: [
        { val: "A", text: "Automated Test Framework" },
        { val: "B", text: "Source Control" },
        { val: "C", text: "Delegated Development" },
        { val: "D", text: "Flow Designer" }
    ],
    answer: "A,D"
},

{
    q: `Which one of the following is NOT a UI Action type?`,
    options: [
        { val: "A", text: "List choice" },
        { val: "B", text: "Form button" },
        { val: "C", text: "List banner button" },
        { val: "D", text: "Form choice" }
    ],
    answer: "D"
},

{
    q: `Which of the following is NOT supported by Flow Designer?`,
    options: [
        { val: "A", text: "Call a subflow from a flow" },
        { val: "B", text: "Test a flow with rollback" },
        { val: "C", text: "Use Delegated Developer" },
        { val: "D", text: "Run a flow from a MetricBase Trigger" },
        { val: "E", text: "Automated test framework" }
    ],
    answer: "B"
},

{
    q: `What is a Module?`,
    options: [
        { val: "A", text: "The functionality within an application menu such as opening a page in the content frame or a separate tab or window" },
        { val: "B", text: "A group of menus, or pages, providing related information and functionality to end-users" },
        { val: "C", text: "A way of helping users quickly access information and services by filtering the items in the Application Navigator" },
        { val: "D", text: "A web-based way of providing software to end-users" }
    ],
    answer: "A"
},

{
    q: `Modules must have a Link type. Which one of the following is a list of Link types?`,
    options: [
        { val: "A", text: "List of Records, Separator, Catalog Type, Roles" },
        { val: "B", text: "Assessment, List of Records, Separator, Timeline Page" },
        { val: "C", text: "List of Records, Content Page, Order, URL (from arguments)" },
        { val: "D", text: "Assessment, List of Records, Content Page, Roles" }
    ],
    answer: "B"
},

{
    q: `Which one of the following is NOT true for Modules?`,
    options: [
        { val: "A", text: "Modules open content pages" },
        { val: "B", text: "Access to Modules is controlled with roles" },
        { val: "C", text: "Every Module must be part of an Application Menu" },
        { val: "D", text: "Every Module must be associated with a table" }
    ],
    answer: "D"
},
{
    q: `A graphical view of relationships among tables is a`,
    options: [
        { val: "A", text: "Schema map" },
        { val: "B", text: "Dependency view" },
        { val: "C", text: "Graphical User Interface" },
        { val: "D", text: "Map source report" }
    ],
    answer: "A"
},

{
    q: `Which one of the following is true for the Application Picker?`,
    options: [
        { val: "A", text: "All custom application scope and the Global scope appear in the Application Picker" },
        { val: "B", text: "All applications in ServiceNow, including baseline applications like Incident, appear in the Application Picker" },
        { val: "C", text: "Only custom applications appear in the Application Picker" },
        { val: "D", text: "Only downloaded applications appear in the Application Picker" }
    ],
    answer: "A"
},

{
    q: `When creating an application through the Guided Application Creator, which of the following is a user experience option?`,
    options: [
        { val: "A", text: "Portal" },
        { val: "B", text: "Mobile" },
        { val: "C", text: "Self-service" },
        { val: "D", text: "Workspace" }
    ],
    answer: "B"
},

{
    q: `Which one of the following is true for a table with the Allow configuration Application Access option selected?`,
    options: [
        { val: "A", text: "Only the in scope application's scripts can create Business Rules for the table" },
        { val: "B", text: "Any user with the application's user role can modify the application's scripts" },
        { val: "C", text: "Out of scope applications can create Business Rules for the table" },
        { val: "D", text: "Out of scope applications can add new tables to the scoped application" }
    ],
    answer: "C"
},

{
    q: `When working in the Form Designer, configuring the label of a field in a child table changes the label on which table(s)?`,
    options: [
        { val: "A", text: "Base table" },
        { val: "B", text: "Child table" },
        { val: "C", text: "Parent table" },
        { val: "D", text: "All tables" }
    ],
    answer: "B"
},

{
    q: `Here is the Business Rule script template:

(function executeRule(current, previous /*null when async*/) {

})(current, previous);

This type of JavaScript function is known as:`,
    options: [
        { val: "A", text: "Constructor" },
        { val: "B", text: "Scoped" },
        { val: "C", text: "Anonymous" },
        { val: "D", text: "Self-invoking" }
    ],
    answer: "D"
},

{
    q: `Which method call returns true only if the currently logged in user has the catalog_admin role and in no other case?`,
    options: [
        { val: "A", text: "g_user.hasRole('catalog_admin')" },
        { val: "B", text: "g_user.hasRoleExactly('catalog_admin')" },
        { val: "C", text: "g_user.hasRoleOnly('catalog_admin')" },
        { val: "D", text: "g_user.hasRoleFromList('catalog_admin')" }
    ],
    answer: "B"
},

{
    q: `Which roles grant access to source control repository operations such as importing applications from source control, or linking an application to source control? (Choose two)`,
    options: [
        { val: "A", text: "Source_control" },
        { val: "B", text: "Source_control_admin" },
        { val: "C", text: "Admin" },
        { val: "D", text: "Git_admin" }
    ],
    answer: "A,C"
},

{
    q: `There is a basic strategy when creating a Utils Script Include. Identify the step that does not belong.`,
    options: [
        { val: "A", text: "Identify the table" },
        { val: "B", text: "Script the function(s)" },
        { val: "C", text: "Create a class" },
        { val: "D", text: "Create a prototype object from the new class" }
    ],
    answer: "A"
},

{
    q: `Which one of the following is true for a Script Include with a Protection Policy value of Protected?`,
    options: [
        { val: "A", text: "Any user with the protected_edit role can see and edit the Script Include" },
        { val: "B", text: "The Protection policy option can only be enabled by a user with the admin role" },
        { val: "C", text: "The Protection Policy is applied only if the glide.app.apply_protection system property value is true" },
        { val: "D", text: "The Protection Policy is applied only if the application is downloaded from the ServiceNow App Store" }
    ],
    answer: "D"
},
{
    q: `Which one of the following is true for GlideUser (g_user) methods?`,
    options: [
        { val: "A", text: "Can be used in Client Scripts and UI Policies only" },
        { val: "B", text: "Can be used in Business Rules only" },
        { val: "C", text: "Can be used in Client Scripts, UI Policies, and UI Actions" },
        { val: "D", text: "Can be used in Business Rules, and Scripts Includes" }
    ],
    answer: "C"
},

{
    q: `When configuring a module, what does the Override application menu roles configuration option do?`,
    options: [
        { val: "A", text: "Users with the module role but without access to the application menu access the module" },
        { val: "B", text: "Self-Service users can access the module even though they do not have roles" },
        { val: "C", text: "Admin is given access to the module even if Access Controls would ordinarily prevent access" },
        { val: "D", text: "Users with access to the application menu can see the module even if they don't have the module role" }
    ],
    answer: "A"
},

{
    q: `Which platform feature can be used to determine the relationships between field in an Import Set table to field in an existing ServiceNow table?`,
    options: [
        { val: "A", text: "Business Service Management Map" },
        { val: "B", text: "Data Sources" },
        { val: "C", text: "Transform Map" },
        { val: "D", text: "CI Relationship Builder" }
    ],
    answer: "C"
},

{
    q: `It is best practice to define the business requirements and the process(es) an application will manage as part of the application development plan. What are some of the considerations to document as part of the business process?`,
    options: [
        { val: "A", text: "Business problem, data input/output, users/stakeholders, and process steps" },
        { val: "B", text: "Business problem, data input/output, project schedule, and process steps" },
        { val: "C", text: "Business problem, data input/output, users/stakeholders, and database capacity" },
        { val: "D", text: "Business problem, users/stakeholders, available licenses, and database capacity" }
    ],
    answer: "A"
},

{
    q: `Can inherited fields be deleted from a table?`,
    options: [
        { val: "A", text: "Yes, select the red X in the left-most column in the table definition" },
        { val: "B", text: "Yes, but only if they are text fields" },
        { val: "C", text: "Yes, but only if there has never been any saved field data" },
        { val: "D", text: "No, inherited fields cannot be deleted from a child table" }
    ],
    answer: "D"
},

{
    q: `What is the purpose of the Application Picker?`,
    options: [
        { val: "A", text: "Select an application to run" },
        { val: "B", text: "Select an application as a favorite in the Application Navigator" },
        { val: "C", text: "Choose an application to edit and set the Application Scope" },
        { val: "D", text: "Choose an application to download and install" }
    ],
    answer: "C"
},

{
    q: `When configuring a REST Message, the Endpoint is:`,
    options: [
        { val: "A", text: "The commands to the REST script to stop execution" },
        { val: "B", text: "The URI of the data to be accessed, queried, or modified" },
        { val: "C", text: "Information about the format of the returned data" },
        { val: "D", text: "The response from the provider indicating there is no data to send back" }
    ],
    answer: "B"
},

{
    q: `When evaluating Access Controls, ServiceNow searches and evaluates:`,
    options: [
        { val: "A", text: "Only for matches on the current table" },
        { val: "B", text: "Only for matches on the current field" },
        { val: "C", text: "From the most specific match to the most generic match" },
        { val: "D", text: "From the most generic match to the most specific match" }
    ],
    answer: "C"
},

{
    q: `Which Report Type(s) can be created by right-clicking on a column header in a table's list?`,
    options: [
        { val: "A", text: "Bar Chart, Pie Chart, Histogram, and Line" },
        { val: "B", text: "Bar Chart" },
        { val: "C", text: "Bar Chart, Pie Chart, and Histogram" },
        { val: "D", text: "Bar Chart and Pie Chart" }
    ],
    answer: "D"
},

{
    q: `Which of the following CANNOT be debugged using the Field Watcher?`,
    options: [
        { val: "A", text: "Business Rules" },
        { val: "B", text: "Script Includes" },
        { val: "C", text: "Client Scripts" },
        { val: "D", text: "Access Controls" }
    ],
    answer: "B"
},
{
    q: `Which objects can be used in Inbound Action scripts?`,
    options: [
        { val: "A", text: "current and previous" },
        { val: "B", text: "current and email" },
        { val: "C", text: "current and event" },
        { val: "D", text: "current and producer" }
    ],
    answer: "B"
},

{
    q: `Which one of the following is part of the client-side scripting API?`,
    options: [
        { val: "A", text: "workflow.scratchpad" },
        { val: "B", text: "GlideUser object (g_user)" },
        { val: "C", text: "current and previous objects" },
        { val: "D", text: "GlideSystem object (gs)" }
    ],
    answer: "B"
},

{
    q: `What are some of the benefits of extending an existing table such as the Task table when creating a new application?

a) You can repurpose existing fields by simply changing the label.
b) Use existing fields with no modifications.
c) Existing logic from the parent table will be automatically applied to the new table.
d) All of the parent table records are copied to the new table.`,
    options: [
        { val: "A", text: "a, b, c, and d" },
        { val: "B", text: "a and b" },
        { val: "C", text: "b and c" },
        { val: "D", text: "a, b, and c" }
    ],
    answer: "D"
},

{
    q: `The source control operation used to store local changes on an instance for later application is called a(n)`,
    options: [
        { val: "A", text: "Branch" },
        { val: "B", text: "Tag" },
        { val: "C", text: "Stash" },
        { val: "D", text: "Update set" }
    ],
    answer: "C"
},

{
    q: `When configuring an Access Control which has no condition or script, which one of the following statements is NOT true?`,
    options: [
        { val: "A", text: "table.* will grant access to every field in a record" },
        { val: "B", text: "table.None will grant access to every record on the table" },
        { val: "C", text: "table.field will grant access to a specific field in a record" },
        { val: "D", text: "table.id will grant access to a specific record on the table" }
    ],
    answer: "D"
},

{
    q: `Which of the following methods prints a message on a blue background to the top of the current form by default?`,
    options: [
        { val: "A", text: "g_form.addInfoMsg()" },
        { val: "B", text: "g_form.addInfoMessage()" },
        { val: "C", text: "g_form.showFieldMessage()" },
        { val: "D", text: "g_form.showFieldMsg()" }
    ],
    answer: "B"
},

{
    q: `A scoped application containing Flow Designer content dedicated to a particular application is called a(n):`,
    options: [
        { val: "A", text: "Spoke" },
        { val: "B", text: "Bundle" },
        { val: "C", text: "Action" },
        { val: "D", text: "Flow" }
    ],
    answer: "A"
},

{
    q: `Which source control operation is available from BOTH Studio and the Git Repository?`,
    options: [
        { val: "A", text: "Create Branch" },
        { val: "B", text: "Apply Remote Changes" },
        { val: "C", text: "Stash Local Changes" },
        { val: "D", text: "Edit Repository Configurations" }
    ],
    answer: "A"
},

{
    q: `When writing a Client Script to provide feedback targeted at a specific field, which method should be used?`,
    options: [
        { val: "A", text: "g_form.showInfoMessage()" },
        { val: "B", text: "g_form.showFieldMsg()" },
        { val: "C", text: "g_form.addInfoMessage()" },
        { val: "D", text: "g_form.addFieldMsg()" }
    ],
    answer: "B"
},

{
    q: `Which actions can a Business Rule take without scripting?`,
    options: [
        { val: "A", text: "Set field values and write to the system log" },
        { val: "B", text: "Set field values and generate an event" },
        { val: "C", text: "Set field values and add message" },
        { val: "D", text: "Set field values and query the database" }
    ],
    answer: "C"
},
{
    q: `Which server-side object provides methods for working with dates when writing a script in a privately scoped application?`,
    options: [
        { val: "A", text: "GlideDateTime" },
        { val: "B", text: "GlideRecord" },
        { val: "C", text: "GlideSystem" },
        { val: "D", text: "current" }
    ],
    answer: "A"
},

{
    q: `Which one of the following is NOT required to link a ServiceNow application to a Git repository?`,
    options: [
        { val: "A", text: "Password" },
        { val: "B", text: "URL" },
        { val: "C", text: "User name" },
        { val: "D", text: "Application name" }
    ],
    answer: "D"
},

{
    q: `Which one of the following is NOT a method used for logging messages in a server-side script for a privately-scoped application?`,
    options: [
        { val: "A", text: "gs.log()" },
        { val: "B", text: "gs.error()" },
        { val: "C", text: "gs.warn()" },
        { val: "D", text: "gs.debug()" }
    ],
    answer: "A"
},

{
    q: `If the Create module field is selected when creating a table, what is the new module's default behavior?`,
    options: [
        { val: "A", text: "Open an empty form so new records can be created" },
        { val: "B", text: "Open a link to a wiki article with instructions on how to customize the behavior of the new module" },
        { val: "C", text: "Display an empty homepage for the application" },
        { val: "D", text: "Display a list of all records from the table" }
    ],
    answer: "D"
},

{
    q: `Identify characteristic(s) of a Record Producer. (Choose three.)`,
    options: [
        { val: "A", text: "All records created using this strategy are inserted into the Requested Item [sc_req_item] table" },
        { val: "B", text: "Each field prompts the user with a question rather than a field label" },
        { val: "C", text: "They must be scripted" },
        { val: "D", text: "You can script behaviors of fields in the user interface" },
        { val: "E", text: "Graphics can be included on the user interface" }
    ],
    answer: "B,D,E"
},

{
    q: `How must Application Access be configured to prevent all other private application scopes from creating configuration records on an application's data tables?`,
    options: [
        { val: "A", text: "You must create Access Controls to prevent all other application scopes from creating configuration records on an application's data tables rather than using Application Access" },
        { val: "B", text: "Set the Accessible from field value to All application scopes and de-select the Can create option" },
        { val: "C", text: "Set the Accessible from field value to This application scope only and de-select the Allow access to this table via web services option" },
        { val: "D", text: "Set the Accessible from field value to This application scope only" }
    ],
    answer: "D"
},

{
    q: `Which of the following methods are useful in Access Control scripts?`,
    options: [
        { val: "A", text: "g_user.hasRole() and current.isNewRecord()" },
        { val: "B", text: "gs.hasRole() and current.isNewRecord()" },
        { val: "C", text: "g_user.hasRole() and current.isNew()" },
        { val: "D", text: "gs.hasRole() and current.isNew()" }
    ],
    answer: "B"
},

{
    q: `Which one of the following client-side scripts apply to Record Producers?`,
    options: [
        { val: "A", text: "Catalog Client Scripts and Catalog UI Policies" },
        { val: "B", text: "UI Scripts and UI Actions" },
        { val: "C", text: "UI Scripts and Record Producer Scripts" },
        { val: "D", text: "Client Scripts and UI Policies" }
    ],
    answer: "A"
},

{
    q: `When a ServiceNow instance requests information from a web service, ServiceNow is the web service:`,
    options: [
        { val: "A", text: "Publisher" },
        { val: "B", text: "Specialist" },
        { val: "C", text: "Provider" },
        { val: "D", text: "Consumer" }
    ],
    answer: "D"
},

{
    q: `When creating a table in a privately-scoped application, which four Access Controls are created for the table?`,
    options: [
        { val: "A", text: "Create, Delete, Read, Write" },
        { val: "B", text: "Insert, Delete, Query, Write" },
        { val: "C", text: "Create, Delete, Read, Update" },
        { val: "D", text: "Insert, Delete, Query, Update" }
    ],
    answer: "B"
},
{
    q: `Which one of the following is the fastest way to create and configure a Record Producer?`,
    options: [
        { val: "A", text: "Create a Catalog Category, open the category, and select the Add New Record Producer button" },
        { val: "B", text: "Create, Delete, Read, Write" },
        { val: "C", text: "Open the table in the Table records and select the Add to Service Catalog Related Link" },
        { val: "D", text: "Open the table's form, right-click on the form header, and select the Create Record Producer menu item" }
    ],
    answer: "C"
},

{
    q: `Which server-side API debug log method is available for scoped applications?`,
    options: [
        { val: "A", text: "gs.log()" },
        { val: "B", text: "gs.info()" },
        { val: "C", text: "gs.debuglog()" },
        { val: "D", text: "gs.print()" }
    ],
    answer: "B"
},

{
    q: `Which one of the following database operations cannot be controlled with Application Access?`,
    options: [
        { val: "A", text: "Query" },
        { val: "B", text: "Update" },
        { val: "C", text: "Create" },
        { val: "D", text: "Delete" }
    ],
    answer: "A"
},

{
    q: `What is the best UX format to use for lists and forms?`,
    options: [
        { val: "A", text: "Forms" },
        { val: "B", text: "Lists" },
        { val: "C", text: "Standard" },
        { val: "D", text: "Classic" }
    ],
    answer: "D"
},

{
    q: `Which script types execute on the server? (Choose three.)`,
    options: [
        { val: "A", text: "Business Rule" },
        { val: "B", text: "Client Scripts" },
        { val: "C", text: "UI Policies" },
        { val: "D", text: "Script Actions" },
        { val: "E", text: "Scheduled Jobs" }
    ],
    answer: "A,D,E"
},

{
    q: `Which objects can you use in a Scheduled Script Execution (Scheduled Job) script?`,
    options: [
        { val: "A", text: "GlideRecord and current" },
        { val: "B", text: "GlideUser and GlideRecord" },
        { val: "C", text: "GlideSystem and GlideRecord" },
        { val: "D", text: "GlideSystem and current" }
    ],
    answer: "C"
},

{
    q: `Which one of the following is true for this script fragment?

g_user.hasRole('x_my_app_user');`,
    options: [
        { val: "A", text: "There is no g_user.hasRole() method" },
        { val: "B", text: "The method returns false only if the currently logged in user has the x_my_app_user role" },
        { val: "C", text: "The method returns true only if the currently logged in user has the x_my_app_user role" },
        { val: "D", text: "The method returns true if the currently logged in user has the x_my_app_user role or the admin role" }
    ],
    answer: "D"
},

{
    q: `What are Application Files in a ServiceNow application?`,
    options: [
        { val: "A", text: "An XML export of an application's table records" },
        { val: "B", text: "CSV files containing data imported into an application" },
        { val: "C", text: "ServiceNow artifacts comprising an application" },
        { val: "D", text: "XML exports of an application's Update Set" }
    ],
    answer: "C"
},

{
    q: `For Application Access there is a configuration option called Allow access to this table via web services. Which one of the following statements is true when this option is selected?`,
    options: [
        { val: "A", text: "This option restricts the ability to delete records via web services but records can always be read" },
        { val: "B", text: "Even when not selected, users with the correct permissions can use web services to access the table's records" },
        { val: "C", text: "This option restricts access only to SOAP web services but does not apply to REST" },
        { val: "D", text: "The user performing the query via web services must have the correct permissions to access the table's records" }
    ],
    answer: "D"
},

{
    q: `Which of the following statements must evaluate to true for a user to pass an Access Control? (Choose three.)`,
    options: [
        { val: "A", text: "The user has one of the roles specified in the Required roles related list." },
        { val: "B", text: "Scripts configured in the Access Control must evaluate to true." },
        { val: "C", text: "Other matching Access Controls for the records evaluate to true." },
        { val: "D", text: "Conditions configured in the Access Control must evaluate to true." },
        { val: "E", text: "The user must be granted access through a business rule." }
    ],
    answer: "A,B,D"
},
{
    q: `What is a workflow context?`,
    options: [
        { val: "A", text: "The table for which a workflow is defined plus any conditions such as 'Active is true'" },
        { val: "B", text: "It is generated from a workflow version, executes activities, and follows transitions" },
        { val: "C", text: "The business reason or process for which a workflow is designed" },
        { val: "D", text: "It is a checked out workflow which is being edited" }
    ],
    answer: "B"
},

{
    q: `Which one of the following is a benefit of creating an Application Properties page for each application you develop?`,
    options: [
        { val: "A", text: "Application Properties allow a developer to override the application properties inherited from ServiceNow" },
        { val: "B", text: "An Application Properties page is a good landing page for an application" },
        { val: "C", text: "Application Properties allow a developer or admin to make changes to an application's behavior without modifying application artifacts" },
        { val: "D", text: "Application users know to go to the Application Properties page to change the appearance of an application" }
    ],
    answer: "C"
},

{
    q: `Which one of the following is NOT an example of when an application might use a Scheduled Script Execution (Scheduled Job)?`,
    options: [
        { val: "A", text: "The application needs to send weekly email reminders to requestors for all records on a table." },
        { val: "B", text: "The application needs to run a clean up script on the last day of every month." },
        { val: "C", text: "The application needs to query the database every day to look for unassigned records." },
        { val: "D", text: "The application needs to run a client-side script at the same time every day." }
    ],
    answer: "D"
},

{
    q: `Which one of the following objects CANNOT be used in a Script Action script?`,
    options: [
        { val: "A", text: "previous" },
        { val: "B", text: "GlideRecord" },
        { val: "C", text: "event" },
        { val: "D", text: "current" }
    ],
    answer: "A"
},

{
    q: `When debugging Email Notifications, what must you check on a user record? (Choose three.)`,
    options: [
        { val: "A", text: "Active must be true" },
        { val: "B", text: "The First name and Last name fields must have values" },
        { val: "C", text: "The value in the Notification field must be set to enabled." },
        { val: "D", text: "The user must not be locked out" },
        { val: "E", text: "The Email field must have a value." }
    ],
    answer: "A,C,E"
},

{
    q: `How does ServiceNow match inbound email to existing records?`,
    options: [
        { val: "A", text: "Watermark" },
        { val: "B", text: "Record link" },
        { val: "C", text: "Subject line" },
        { val: "D", text: "sys_id" }
    ],
    answer: "A"
},

{
    q: `What are web services?`,
    options: [
        { val: "A", text: "Methods used to create and maintain UI Pages" },
        { val: "B", text: "Methods used to allow applications to connect to other software applications over a network" },
        { val: "C", text: "Methods used to discover a wide variety of systems and applications" },
        { val: "D", text: "They provide a customer-facing view of available service and product offerings provided by departments within the organization" }
    ],
    answer: "B"
},

{
    q: `You are developing the MyApp application that has a table, Table A. When the MyApp application is installed on an instance, you want Table A's records to be installed as part of the application. Table A's records will be installed when:`,
    options: [
        { val: "A", text: "Table A is active and extends the Task table" },
        { val: "B", text: "Table A's records are added to the application record using the Create Application Files context menu item" },
        { val: "C", text: "Table A has an automatic number counter for new records" },
        { val: "D", text: "Table A is not included in the System Clone > Exclude Tables list" }
    ],
    answer: "B"
},

{
    q: `Which of the following methods is NOT part of the ServiceNow REST API?`,
    options: [
        { val: "A", text: "COPY" },
        { val: "B", text: "GET" },
        { val: "C", text: "DELETE" },
        { val: "D", text: "POST" }
    ],
    answer: "A"
},

{
    q: `How can an application link to a repository behind a firewall?`,
    options: [
        { val: "A", text: "This option is not supported." },
        { val: "B", text: "Link an application to source control through a MID Server." },
        { val: "C", text: "Link an application to source control through an access token." },
        { val: "D", text: "Link an application to source control with multi-factor authentication." }
    ],
    answer: "B"
},
{
    q: `What is the ServiceNow Store?`,
    options: [
        { val: "A", text: "Downloadable content ServiceNow script archive" },
        { val: "B", text: "Alternate name for the ServiceNow Developer Share site" },
        { val: "C", text: "The source for ServiceNow Community created developer content" },
        { val: "D", text: "Marketplace for free and paid certified ServiceNow applications and integrations" }
    ],
    answer: "D"
},

{
    q: `Tables that extend a table do what?`,
    options: [
        { val: "A", text: "Automatically update the application scope" },
        { val: "B", text: "Do not inherit the parent’s fields" },
        { val: "C", text: "Sometimes inherit the parent’s fields" },
        { val: "D", text: "Inherit the parent’s fields" }
    ],
    answer: "D"
},

{
    q: `When creating an application through the Guided Application Creator, which of the following is NOT an option for creating a table?`,
    options: [
        { val: "A", text: "Create table from template" },
        { val: "B", text: "Create table from scratch" },
        { val: "C", text: "Extend a table" },
        { val: "D", text: "Upload spreadsheet" }
    ],
    answer: "A"
},

{
    q: `Server-side scripts manage what?`,
    options: [
        { val: "A", text: "Database and backend" },
        { val: "B", text: "Playbook access" },
        { val: "C", text: "User access" },
        { val: "D", text: "Forms and Fields" }
    ],
    answer: "A"
},

{
    q: `What intuitive development interface guides users through the initial application development process?`,
    options: [
        { val: "A", text: "Guided Tour Designer" },
        { val: "B", text: "Guided Application Creator" },
        { val: "C", text: "ServiceNow Studio" },
        { val: "D", text: "Flow Designer" }
    ],
    answer: "B"
},

{
    q: `What are some benefits of developing private, scoped applications? (Choose two.)`,
    options: [
        { val: "A", text: "To avoid using a code repository like GitHub or GitLab" },
        { val: "B", text: "To reduce risk at code collisions" },
        { val: "C", text: "To enable installation and uninstallation of an application" },
        { val: "D", text: "To replicate ServiceNow functions in a private scope" }
    ],
    answer: "B,C"
},

{
    q: `Which one of the following is a good practice for adding instructions to a form?`,
    options: [
        { val: "A", text: "Related links to wiki pages" },
        { val: "B", text: "A Context Menu UI Action" },
        { val: "C", text: "Annotations" },
        { val: "D", text: "A populated read-only field" }
    ],
    answer: "C"
},

{
    q: `Which of the following statements is NOT true for the Form Designer?`,
    options: [
        { val: "A", text: "To add a section to the form layout, drag it from the Field Types tab to the desired destination on the form." },
        { val: "B", text: "To add a field to the form layout, drag the field from the Fields tab to the desired destination on the form." },
        { val: "C", text: "To remove a field from the form layout, hover over the field to enable the Action buttons, and select the Delete (X) button." },
        { val: "D", text: "To create a new field on a form's table, drag the appropriate data type from the Field Types tab to the form and then configure the new field." }
    ],
    answer: "A"
},

{
    q: `What records are used to track cross-scope applications or scripts that request access to an application, application resource, or event?`,
    options: [
        { val: "A", text: "Restricted caller access records" },
        { val: "B", text: "Caller tracking records" },
        { val: "C", text: "Access control level records" },
        { val: "D", text: "Cross-scope access records" }
    ],
    answer: "A"
},

{
    q: `Which of the following can be an external data source for a ServiceNow application?`,
    options: [
        { val: "A", text: "Microsoft Excel File" },
        { val: "B", text: "Data provided by a public web service using SOAP or REST" },
        { val: "C", text: "CSV file" },
        { val: "D", text: "All of the above" }
    ],
    answer: "D"
},
{
    q: `Which ATF Test step allows you to create a user with speeded roles and groups for the test?`,
    options: [
        { val: "A", text: "Create a group" },
        { val: "B", text: "Impersonation" },
        { val: "C", text: "Create a user" },
        { val: "D", text: "Create a role" }
    ],
    answer: "C"
},

{
    q: `Which one of the following is true for the Application Picker and Application Scope?`,
    options: [
        { val: "A", text: "Global is a reserved application which does not appear in the Application Picker" },
        { val: "B", text: "Selecting an application from the Application Picker does not set the Application Scope" },
        { val: "C", text: "Selecting an application from the Application Picker sets the Application Scope" },
        { val: "D", text: "Selecting Global in the Application Picker sets the Application Scope to Incident" }
    ],
    answer: "C"
},

{
    q: `Which of the following is an available feature in Studio? (Choose two.)`,
    options: [
        { val: "A", text: "Push to update set" },
        { val: "B", text: "Merge branches" },
        { val: "C", text: "Search code" },
        { val: "D", text: "Push to external source control" }
    ],
    answer: "C,D"
},

{
    q: `What plugin enables the Guided Application Creator?`,
    options: [
        { val: "A", text: "com.glide.sn-guided-app-creator" },
        { val: "B", text: "com.glide.service_creator" },
        { val: "C", text: "com.glide.snc.apps_creator" },
        { val: "D", text: "com.snc.apps_creator_template" }
    ],
    answer: "A"
},

{
    q: `The Task table is an example of which of the following? (Choose two.)`,
    options: [
        { val: "A", text: "Parent class" },
        { val: "B", text: "Legacy class" },
        { val: "C", text: "Child class" },
        { val: "D", text: "Base class" }
    ],
    answer: "A,D"
},

{
    q: `Which of the following is true about deleting fields from a table?`,
    options: [
        { val: "A", text: "Table records are deleted when a field is deleted" },
        { val: "B", text: "User-defined non-inherited fields can be deleted" },
        { val: "C", text: "Any field on a table can be deleted" },
        { val: "D", text: "Inherited fields can be deleted" }
    ],
    answer: "B"
},

{
    q: `Why would you build a custom app? (Choose two.)`,
    options: [
        { val: "A", text: "To avoid using a code repository like GitHub or GitLab" },
        { val: "B", text: "To replace ServiceNow base tables" },
        { val: "C", text: "To fulfill a specific use case on internal processes" },
        { val: "D", text: "To create a custom integration for a 3rd party system" }
    ],
    answer: "C,D"
},

{
    q: `What are three ServiceNow table creation methods? (Choose three.)`,
    options: [
        { val: "A", text: "Using legacy Workflows" },
        { val: "B", text: "Upload and turn a spreadsheet into a custom table" },
        { val: "C", text: "Extend a table" },
        { val: "D", text: "Use the Now Experience Table Creator" },
        { val: "E", text: "Create a custom table" }
    ],
    answer: "B,C,E"
},

{
    q: `When selecting a data type for a field that will be displayed on a form, which of the following statements is NOT correct?`,
    options: [
        { val: "A", text: "Use the String data type for a free-form text field" },
        { val: "B", text: "Use the Phone Number data type to automate phone number data validation" },
        { val: "C", text: "Use the Choice data type to limit options in a field" },
        { val: "D", text: "Use the Date data type to enter the date and time of day" }
    ],
    answer: "D"
},

{
    q: `Which one of the following is NOT part of the Form Designer?`,
    options: [
        { val: "A", text: "Page header" },
        { val: "B", text: "Schema map" },
        { val: "C", text: "Field navigator" },
        { val: "D", text: "Form layout" }
    ],
    answer: "B"
},
{
    q: `Which class is NOT part of the Client side scoped APIs?`,
    options: [
        { val: "A", text: "GlideDialogWindow" },
        { val: "B", text: "GlideAjax" },
        { val: "C", text: "GlideRecord" },
        { val: "D", text: "GlideForm" }
    ],
    answer: "C"
},

{
    q: `When designing and creating a form what do you create to organize fields on a form?`,
    options: [
        { val: "A", text: "Buttons" },
        { val: "B", text: "Tabs" },
        { val: "C", text: "Sections" },
        { val: "D", text: "Related lists" }
    ],
    answer: "C"
},

{
    q: `Which of the following GlideRecord methods run a query against a database table? (Choose three.)`,
    options: [
        { val: "A", text: "get()" },
        { val: "B", text: "runQuery()" },
        { val: "C", text: "query()" },
        { val: "D", text: "_query()" },
        { val: "E", text: "get()" }
    ],
    answer: "C,D,E"
},

{
    q: `What is the GlideForm Client-side scripting object?`,
    options: [
        { val: "A", text: "sn.form" },
        { val: "B", text: "g_form" },
        { val: "C", text: "gs.form" },
        { val: "D", text: "gs_form" }
    ],
    answer: "B"
},

{
    q: `Access Control debug information identifies whether each element of an Access Control granted or denied access. The elements appear in the debug information in the order of evaluation. In which order are the elements of an Access Control evaluated?`,
    options: [
        { val: "A", text: "Conditions, Roles, Script" },
        { val: "B", text: "Conditions, Script, Roles" },
        { val: "C", text: "Roles, Conditions, Script" },
        { val: "D", text: "Script, Conditions, Roles" }
    ],
    answer: "C"
},

{
    q: `Which of the following is NOT a caller access field option?`,
    options: [
        { val: "A", text: "Caller Tracking" },
        { val: "B", text: "Caller Restriction" },
        { val: "C", text: "Caller Access" },
        { val: "D", text: "Caller Permission" }
    ],
    answer: "D"
},

{
    q: `In a Business Rule, which one of the following returns the sys_id of the currently logged in user?`,
    options: [
        { val: "A", text: "g_form.getUserID()" },
        { val: "B", text: "gs.getUserSysID()" },
        { val: "C", text: "gs.getUserID()" },
        { val: "D", text: "g_form.getUserSysID()" }
    ],
    answer: "C"
},

{
    q: `What Module Link type is used to access an Application Properties page?`,
    options: [
        { val: "A", text: "Single Record" },
        { val: "B", text: "HTML (from Arguments)" },
        { val: "C", text: "URL (from Arguments)" },
        { val: "D", text: "Script (from Arguments)" }
    ],
    answer: "C"
},

{
    q: `Which method is used to retrieve Application Property values in a script?`,
    options: [
        { val: "A", text: "gs.getProperty()" },
        { val: "B", text: "g_form.getAppProperty()" },
        { val: "C", text: "g_form.getProperty()" },
        { val: "D", text: "gs.getAppProperty()" }
    ],
    answer: "A"
},

{
    q: `What are the benefits of storing the majority of an Application’s server-side script logic in a Script Include?

a. This makes execution faster.
b. Only run when called from a script.
c. The script logic can be hidden when the Application is installed from the ServiceNow Store.
d. For some changes to application logic there is only one place to make edits.`,
    options: [
        { val: "A", text: "a, b, and d" },
        { val: "B", text: "a, b, c, and d" },
        { val: "C", text: "b, c, and d" },
        { val: "D", text: "a, b, and c" }
    ],
    answer: "C"
},
{
    q: `When troubleshooting and debugging notifications, where do you navigate to see if an email was sent in response to an event?`,
    options: [
        { val: "A", text: "System Logs > Events" },
        { val: "B", text: "System Logs > Emails" },
        { val: "C", text: "System Logs > Push Notifications" },
        { val: "D", text: "System Logs > ICE Logs" }
    ],
    answer: "B"
},

{
    q: `Identify the way(s) an application can respond to an Event generated by the gs.eventQueue() method.

a. Script Action
b. Scheduled Script Execution (Scheduled Job)
c. UI Policy
d. Email Notification`,
    options: [
        { val: "A", text: "b and c" },
        { val: "B", text: "c" },
        { val: "C", text: "a and d" },
        { val: "D", text: "a and c" }
    ],
    answer: "C"
},

{
    q: `Which of the following is NOT a Flow Designer feature?`,
    options: [
        { val: "A", text: "Run a flow from a Catalog item" },
        { val: "B", text: "Call a flow from another flow or subflow" },
        { val: "C", text: "Add stages to a flow" },
        { val: "D", text: "Test a flow using the 'Run as' feature" }
    ],
    answer: "D"
},

{
    q: `What is the purpose of the coalesce field when importing data?`,
    options: [
        { val: "A", text: "If a match is not found, the existing record is updated" },
        { val: "B", text: "To determine if a record matches an existing record or is a new record" },
        { val: "C", text: "To identify and merge duplicate records" },
        { val: "D", text: "When a match is found, a new record is inserted" }
    ],
    answer: "B"
},

{
    q: `If you create a SOAP Message what syntax indicates a variable to pass when the function is called?`,
    options: [
        { val: "A", text: "current.variable_name" },
        { val: "B", text: "${variable_name}" },
        { val: "C", text: "< variable_name >.do?WSDL" },
        { val: "D", text: "< variable_name >" }
    ],
    answer: "B"
},

{
    q: `Which of the following is NOT a way to install an application on a ServiceNow instance?`,
    options: [
        { val: "A", text: "Install an application from the Application Repository" },
        { val: "B", text: "Select the Copy button on the application record" },
        { val: "C", text: "Download and install an application from the ServiceNow Share web site" },
        { val: "D", text: "Download and install a third-party application from the ServiceNow Store" }
    ],
    answer: "B"
},

{
    q: `Using Custom UI test step in Automated Test Framework, which of the following is NOT a testable page component?`,
    options: [
        { val: "A", text: "Buttons" },
        { val: "B", text: "UI controls" },
        { val: "C", text: "UI pages" },
        { val: "D", text: "Form field values" }
    ],
    answer: "D"
},

{
    q: `Which module is used to access the knowledge bases which are available to you?`,
    options: [
        { val: "A", text: "Knowledge > Home" },
        { val: "B", text: "Self Service > Knowledge" },
        { val: "C", text: "Knowledge > All" },
        { val: "D", text: "Knowledge > Knowledge Bases" },
        { val: "E", text: "Knowledge > Overview" }
    ],
    answer: "B"
},

{
    q: `Flow Designer supports variable data types to store record data and complex data. Which of the following are supported variable data types? (Choose three.)`,
    options: [
        { val: "A", text: "Choice data type" },
        { val: "B", text: "Array.Reference data type" },
        { val: "C", text: "Integer data type" },
        { val: "D", text: "Freedom data type" },
        { val: "E", text: "Array.Boolean data type" }
    ],
    answer: "A,C,E"
},

{
    q: `What type of user (persona) has clearly defined paths and workflows in the platform and have one or more roles (ie itil and approver_user)?`,
    options: [
        { val: "A", text: "Workflow User" },
        { val: "B", text: "Request Fulfiller" },
        { val: "C", text: "ITSM User" },
        { val: "D", text: "Approving Manager" },
        { val: "E", text: "Process User" }
    ],
    answer: "E"
},
{
    q: `Which module would you use to customize your instances banner image, text and colors?`,
    options: [
        { val: "A", text: "System UI > UI Pages > Branding" },
        { val: "B", text: "Service Portal > Portals > Branding" },
        { val: "C", text: "System Properties > Basic Configuration UI16" },
        { val: "D", text: "System Properties > Branding" },
        { val: "E", text: "Homepage Admin > Pages > Branding" }
    ],
    answer: "C"
},

{
    q: `Which one of the following returns true if the currently logged in user has the admin role in a server side script?`,
    options: [
        { val: "A", text: "g_form.hasRoleExactly('admin')" },
        { val: "B", text: "gs.hasRole('admin')" },
        { val: "C", text: "g_form.hasRole('admins')" },
        { val: "D", text: "gs.hasRoleExactly('admin')" }
    ],
    answer: "B"
},

{
    q: `Which of the following writes a message to the system log but NOT to the syslog table unless debug has been activated?`,
    options: [
        { val: "A", text: "gs.info('Hello World')" },
        { val: "B", text: "gs.print('Hello World')" },
        { val: "C", text: "gs.log('Hello World')" }
    ],
    answer: "B"
},

{
    q: `How do I make my accept solution widget conditional on page load in Service Portal?`,
    options: [
        { val: "A", text: "Use ngShow" },
        { val: "B", text: "Use ngApp" },
        { val: "C", text: "Use ng-if" }
    ],
    answer: "C"
},

{
    q: `What is true about homepages on mobile?`,
    options: [
        { val: "A", text: "Same as desktop homepages without the delete option" },
        { val: "B", text: "There are no homepage on mobile" },
        { val: "C", text: "Same as desktop homepages in every way" },
        { val: "D", text: "Same as desktop homepages with delete option" }
    ],
    answer: "B"
},

{
    q: `What does the code search feature do in the studio? (Choose 3)`,
    options: [
        { val: "A", text: "Seraching in business rule" },
        { val: "B", text: "Search from a list of applications" },
        { val: "C", text: "Searching in all application" },
        { val: "D", text: "Searching in your application" }
    ],
    answer: "A,C,D"
},

{
    q: `In what order are ServiceNow Access Controls evaluated?`,
    options: [
        { val: "A", text: "table, record" },
        { val: "B", text: "field, table" },
        { val: "C", text: "table, field" },
        { val: "D", text: "record, field" }
    ],
    answer: "C"
},

{
    q: `Which of the following is NOT a type of authentication used by REST APIs? (Choose 2)`,
    options: [
        { val: "A", text: "JDBC" },
        { val: "B", text: "OAuth 2.0" },
        { val: "C", text: "CIM" },
        { val: "D", text: "Mutual authentication using protocol profiles" },
        { val: "E", text: "Basic Auth" }
    ],
    answer: "A,C"
},

{
    q: `What are the 2 core base tables from which all other tables are extended in ServiceNow?`,
    options: [
        { val: "A", text: "task and cmdb_model" },
        { val: "B", text: "incident and cmdb_ci" },
        { val: "C", text: "task and cmdb" },
        { val: "D", text: "incident and cmdb_rel_ci" }
    ],
    answer: "C"
},

{
    q: `As it relates ServiceNow reporting, which of the following statements describes what a metric can do?`,
    options: [
        { val: "A", text: "A metric is a comparative measurement used to report the effectiveness of workflows and SLAs" },
        { val: "B", text: "A metric is a report gauge used on homepage to display real-time data" },
        { val: "C", text: "A metric is used to measure and evaluate the effectiveness of IT service management processes" },
        { val: "D", text: "A metric is a time measurement used to report the effectiveness of workflows and SLAs" }
    ],
    answer: "C"
},
{
    q: `Which one of the following is NOT a GlideUser (g_user) method?`,
    options: [
        { val: "A", text: "getFullName()" },
        { val: "B", text: "username()" },
        { val: "C", text: "hasRoleExactly()" },
        { val: "D", text: "hasRole()" }
    ],
    answer: "B"
},

{
    q: `Which of the following are NOT methods from the GlideRecord API? (Choose 2)`,
    options: [
        { val: "A", text: "query()" },
        { val: "B", text: "addOrQuery()" },
        { val: "C", text: "addQuery()" },
        { val: "D", text: "addAndQuery()" },
        { val: "E", text: "addEncodedQuery()" }
    ],
    answer: "B,D"
},

{
    q: `Which API provides methods to translate text into multiple languages in real life?`,
    options: [
        { val: "A", text: "Dynamic Translation" },
        { val: "B", text: "Genius Translation" },
        { val: "C", text: "Dynamic Result Answer" },
        { val: "D", text: "Genius Result Answer" }
    ],
    answer: "A"
},

{
    q: `How are flow variables access in the flow designer data panel?`,
    options: [
        { val: "A", text: "Data pills" },
        { val: "B", text: "Newly generated icons" },
        { val: "C", text: "Scratchpad variables" },
        { val: "D", text: "New tabs" }
    ],
    answer: "A"
},

{
    q: `When debugging a script a developer can log breakpoints or conditional log points to log messages to the console at specific lines, and remove log points when they are done debugging them. Which system property must be set to true to enable log points?`,
    options: [
        { val: "A", text: "glide.debugger.log.ui" },
        { val: "B", text: "glide.ui.js_can_debug" },
        { val: "C", text: "glide.debug.log_point" },
        { val: "D", text: "com.glide.index_suggestion.debug" }
    ],
    answer: "C"
},

{
    q: `Which of the following actions is not supported by Studio?`,
    options: [
        { val: "A", text: "Integrate with source control" },
        { val: "B", text: "Format code indentation with JS Beautify" },
        { val: "C", text: "Enable context options to modify data" },
        { val: "D", text: "Download only the required session logs" }
    ],
    answer: "C"
},

{
    q: `Which of the following modules enables security rule debugging?`,
    options: [
        { val: "A", text: "System Security > Session Debug > Debug Security Rules" },
        { val: "B", text: "System Diagnostics > Session Debug > Debug Security Rules" },
        { val: "C", text: "System Diagnostics > Debugging > Debug Security Rules" },
        { val: "D", text: "Access Control > Debugging > Debug Security Rules" },
        { val: "E", text: "System Security > Debugging > Debug Security Rules" }
    ],
    answer: "E"
},

{
    q: `Which of the following would not be good fit for an application to run on the ServiceNow instance?`,
    options: [
        { val: "A", text: "Facilities Management application" },
        { val: "B", text: "Virtual Reality Gaming application" },
        { val: "C", text: "A meeting room scheduling application" },
        { val: "D", text: "Billing Cost Management application" }
    ],
    answer: "B"
},

{
    q: `Which of the following are steps in the generalized process for working with events? (Choose 3)`,
    options: [
        { val: "A", text: "Create a Scheduled Script Execution" },
        { val: "B", text: "Respond to the event" },
        { val: "C", text: "Write a Business Rule" },
        { val: "D", text: "Generate the event" },
        { val: "E", text: "Add an event to the Event Registry" }
    ],
    answer: "B,D,E"
},

{
    q: `What debugging method you use in the server side scripting in a scoped application?`,
    options: [
        { val: "A", text: "gs.addInfoMessage()" },
        { val: "B", text: "gs.log()" },
        { val: "C", text: "gs.info()" },
        { val: "D", text: "gs.debuglog()" }
    ],
    answer: "C"
},
{
    q: `Which Script Debugger feature helps filter debugging searches to quickly narrow down script problems?`,
    options: [
        { val: "A", text: "Script Filter" },
        { val: "B", text: "Script Tracer" },
        { val: "C", text: "Script Search" },
        { val: "D", text: "Session Tracer" }
    ],
    answer: "B"
},

{
    q: `When creating an application via Guided Application Creator, which of the following is NOT a user experience options? (Choose 2)`,
    options: [
        { val: "A", text: "Portal" },
        { val: "B", text: "Workplace" },
        { val: "C", text: "Mobile" },
        { val: "D", text: "Classic" }
    ],
    answer: "A,B"
},

{
    q: `Which utility is used to determine if field names in an Import Set match the field names on the target table when importing data into ServiceNow?`,
    options: [
        { val: "A", text: "Business Service Management Map" },
        { val: "B", text: "CI Relationship Builder" },
        { val: "C", text: "Transform Maps" },
        { val: "D", text: "Auto Map Matching Fields" }
    ],
    answer: "C"
},

{
    q: `Which of the following is NOT report type in ServiceNow reports?`,
    options: [
        { val: "A", text: "Trend" },
        { val: "B", text: "Line" },
        { val: "C", text: "List" },
        { val: "D", text: "Chart" }
    ],
    answer: "D"
},

{
    q: `When managing global application files, you can NOT:`,
    options: [
        { val: "A", text: "Move an application file in global applications" },
        { val: "B", text: "Move an application file between global applications" },
        { val: "C", text: "Move application files into or out of scoped application" },
        { val: "D", text: "Add files from global scope to a global application" }
    ],
    answer: "C"
},

{
    q: `Which of the following objects does a before business rule have access to?`,
    options: [
        { val: "A", text: "previous" },
        { val: "B", text: "All the above" },
        { val: "C", text: "current" },
        { val: "D", text: "GlideRecord" }
    ],
    answer: "B"
},

{
    q: `You are writing an Async Business Rule for a table in a different scope than the Business Rule record. Which one of the following database operations CANNOT be part of the Async Business Rule's configuration?`,
    options: [
        { val: "A", text: "Delete" },
        { val: "B", text: "Insert" },
        { val: "C", text: "Update" },
        { val: "D", text: "Query" }
    ],
    answer: "D"
},

{
    q: `What one of the following is the correct syntax for adding dynamic content to a notification's HTML message field?`,
    options: [
        { val: "A", text: "${current.short_description}" },
        { val: "B", text: "current.short_description" },
        { val: "C", text: "$current.short_description" },
        { val: "D", text: "$short_description" },
        { val: "E", text: "${short_description}" }
    ],
    answer: "E"
},

{
    q: `When ServiceNow receives an inbound email it attempts to match the sender to a user record. Which one of the following is NOT true?`,
    options: [
        { val: "A", text: "If automatic user creation is disabled, the Guest user is impersonated" },
        { val: "B", text: "If a match is found, the user is impersonated for the execution of Inbound Actions" },
        { val: "C", text: "Inbound Actions scripts can reference the user using methods such as gs.getUserName()" },
        { val: "D", text: "If no match is found the email is sent to the Inbox Junk Folder" }
    ],
    answer: "D"
},

{
    q: `Which of the following is NOT a type of annotation?`,
    options: [
        { val: "A", text: "Info Box Red" },
        { val: "B", text: "Text" },
        { val: "C", text: "Line Separator" },
        { val: "D", text: "Info Box Yellow" },
        { val: "E", text: "Info Box Blue" }
    ],
    answer: "D"
},
{
    q: `What is not true about email notifications? (Select one)`,
    options: [
        { val: "A", text: "What" },
        { val: "B", text: "When" },
        { val: "C", text: "Who" },
        { val: "D", text: "How" }
    ],
    answer: "D"
},

{
    q: `Which of the following pops out a special field messages?`,
    options: [
        { val: "A", text: "g_form.addErrorMessage()" },
        { val: "B", text: "g_form.showFieldMsg()" },
        { val: "C", text: "g_form.showFieldMessage()" },
        { val: "D", text: "g_form.addInfoMessage()" },
        { val: "E", text: "g_form.addFieldMessage()" }
    ],
    answer: "B"
},

{
    q: `Which of the following scripts do not always run on the server side?`,
    options: [
        { val: "A", text: "Script Includes" },
        { val: "B", text: "Business Rules" },
        { val: "C", text: "UI Action" },
        { val: "D", text: "Script Action" }
    ],
    answer: "C"
},

{
    q: `What are the UX (user experience) options available in Guided Application Creator? (Choose 2)`,
    options: [
        { val: "A", text: "Classic" },
        { val: "B", text: "Desktop" },
        { val: "C", text: "Tablet" },
        { val: "D", text: "Workspace" },
        { val: "E", text: "Mobile" }
    ],
    answer: "A,E"
},

{
    q: `Which one of the following best describes what a flow is?`,
    options: [
        { val: "A", text: "A sequence of actions to automate processes on the platform" },
        { val: "B", text: "A script that defines the steps to automate processes on the platform" },
        { val: "C", text: "A sequence of steps to automate processes on the platform" },
        { val: "D", text: "A sequence of activities to automate processes on the platform" }
    ],
    answer: "A"
},

{
    q: `Which method is used in emulating mobile for testing?`,
    options: [
        { val: "A", text: "$mobile.do" },
        { val: "B", text: "$t.do" },
        { val: "C", text: "$m.do" },
        { val: "D", text: "$tablet.do" }
    ],
    answer: "C"
},

{
    q: `Which role is required to access Guide Application Creator?`,
    options: [
        { val: "A", text: "sn_developer.app_creator" },
        { val: "B", text: "sn_app_creator.app_creator" },
        { val: "C", text: "sn_gac.app_creator" },
        { val: "D", text: "sn_g_app_creator.app_creator" }
    ],
    answer: "D"
},

{
    q: `Which of the following statements must evaluate to true to grant a user access to application table's record?

a) Conditions configured in the access controls must evaluate to true
b) Scripts configured in the access control must evaluate to true
c) The user has one of the roles specified in the required roles related list
d) Other matching access controls for the records evaluate to true`,
    options: [
        { val: "A", text: "a, b, c" },
        { val: "B", text: "a and c" },
        { val: "C", text: "a and b" },
        { val: "D", text: "a, b, c and d" }
    ],
    answer: "A"
},

{
    q: `While debugging security rules, what does the blue color code indicate?`,
    options: [
        { val: "A", text: "Indicates the ACL is already in the cache and does not need to be re-evaluated" },
        { val: "B", text: "Access denied" },
        { val: "C", text: "Passed" },
        { val: "D", text: "Access granted" },
        { val: "E", text: "Failed" }
    ],
    answer: "A"
},

{
    q: `The getCurrentDomainID() method is part of which scoped class?`,
    options: [
        { val: "A", text: "Scoped GlideSession" },
        { val: "B", text: "Scoped domain" },
        { val: "C", text: "ScopedDCMAnager" },
        { val: "D", text: "GlideRecord" }
    ],
    answer: "A"
},
{
    q: `Which of the below is not a valid state for a scheduled job in ServiceNow instance?`,
    options: [
        { val: "A", text: "Waiting for Approval" },
        { val: "B", text: "Queued" },
        { val: "C", text: "Error" },
        { val: "D", text: "Ready" },
        { val: "E", text: "Running" }
    ],
    answer: "A"
},

{
    q: `Which of the following variables are NOT available in all Business Rules? (Choose 2)`,
    options: [
        { val: "A", text: "Previous" },
        { val: "B", text: "GlideSystem" },
        { val: "C", text: "g_scratchpad" },
        { val: "D", text: "Current" }
    ],
    answer: "A,C"
},

{
    q: `What is the main purpose of Integration Hub in ServiceNow?`,
    options: [
        { val: "A", text: "Activity in workflow designer to integrate 3rd party applications" },
        { val: "B", text: "Enables execution of third-party APIs as part of a flow when a specific event occurs in ServiceNow" },
        { val: "C", text: "Custom application from ServiceNow Store used for importing data into ServiceNow" }
    ],
    answer: "B"
},

{
    q: `Which protects applications by identifying and restricting access to application files and data?`,
    options: [
        { val: "A", text: "Application Scope" },
        { val: "B", text: "Roles" },
        { val: "C", text: "ACLs" }
    ],
    answer: "A"
},

{
    q: `Which of the following can be used to place a report on a Homepage?`,
    options: [
        { val: "A", text: "Gadget" },
        { val: "B", text: "Gauge" },
        { val: "C", text: "Tag" },
        { val: "D", text: "Catalog" }
    ],
    answer: "B"
},

{
    q: `The option in Table configuration that allows this table to be extended from?`,
    options: [
        { val: "A", text: "Extended By" },
        { val: "B", text: "Extends" },
        { val: "C", text: "Extensible" },
        { val: "D", text: "Can be extended" }
    ],
    answer: "C"
},

{
    q: `How can a developer extract data from the response body after calling a REST web service? (Choose 2)`,
    options: [
        { val: "A", text: "Use the Convert Response Body wizard to translate the response into an object" },
        { val: "B", text: "Use the XMLDocument2 Script Include to parse the XML" },
        { val: "C", text: "Click the Convert Response Body button to convert the response" },
        { val: "D", text: "Use the XMLDocument2 API to extract data from XML formatted responses" },
        { val: "E", text: "Use the JSON API to convert JSON formatted responses to a JavaScript object" }
    ],
    answer: "D,E"
},

{
    q: `Which of the following statements is true for managing applications purchased from the Store?`,
    options: [
        { val: "A", text: "Applications that belong to other organizations can be changed" },
        { val: "B", text: "Applications that belong to other organizations can be customized" },
        { val: "C", text: "Customizations cannot revert back to the base system application" },
        { val: "D", text: "There are separate entitlements for application-customizations" }
    ],
    answer: "C"
},

{
    q: `How is access to Application menus and modules controlled?`,
    options: [
        { val: "A", text: "Client Scripts" },
        { val: "B", text: "Roles" },
        { val: "C", text: "Application Rules" },
        { val: "D", text: "Access controls" }
    ],
    answer: "B"
},

{
    q: `Application developers can specify which ServiceNow page a user sees after submitting a new record using the Record Producer UI. How is the page specified?`,
    options: [
        { val: "A", text: "Create an application property to store the URL" },
        { val: "B", text: "Configure the page in the Module that opens the Record Producer UI" },
        { val: "C", text: "Write an after Business Rule script for the Record Producer's table: window.redirect = '';" },
        { val: "D", text: "Write a script in the Record Producer's Script field: producer.redirect = '';" }
    ],
    answer: "D"
},
{
    q: `What are the ways to designate data tables when Guided Application Creator (GAC)? (Choose 3 answers)`,
    options: [
        { val: "A", text: "Upload an existing PDF" },
        { val: "B", text: "Create a new table on the platform" },
        { val: "C", text: "Use an existing table on the platform" },
        { val: "D", text: "Upload an existing spreadsheet" },
        { val: "E", text: "Upload an existing word processing document" }
    ],
    answer: "A,B,D"
},

{
    q: `What are the core activities of a Workflow?`,
    options: [
        { val: "A", text: "Service Catalog, Timers, Notifications, Utilities, Conditions, Approvals, Subflows" },
        { val: "B", text: "Test" },
        { val: "C", text: "a and b" }
    ],
    answer: "A"
},

{
    q: `Why create Applications in ServiceNow?

a) To replace outdated, inadequate, custom business applications and processes
b) To extend service delivery and management to all enterprise departments
c) To allow users full access to all ServiceNow tables, records, and fields
d) To extend the value of ServiceNow`,
    options: [
        { val: "A", text: "a, b, and d" },
        { val: "B", text: "a, b, c, and d" },
        { val: "C", text: "a, b, and c" },
        { val: "D", text: "b, c, and d" }
    ],
    answer: "A"
},

{
    q: `Which of the following statements is true about Guided Application Creator?`,
    options: [
        { val: "A", text: "The global scope option is turned on by default" },
        { val: "B", text: "Default access controls are automatically created" },
        { val: "C", text: "The welcome screen appears every time a new application is created" },
        { val: "D", text: "A scoped application user role is automatically created" }
    ],
    answer: "B"
},

{
    q: `What is the Event Registry?`,
    options: [
        { val: "A", text: "A Workflow which is launched every time an Event is generated; used to debug Events" },
        { val: "B", text: "The Event Log which lists all Events that have been generated" },
        { val: "C", text: "The method used in server side scripts to generate Events and pass parameters" },
        { val: "D", text: "A table containing a record for every Event known to the ServiceNow system which allows ServiceNow to react when Events are generated" }
    ],
    answer: "D"
},

{
    q: `Is it possible to change an application's scope?`,
    options: [
        { val: "A", text: "No, it's not possible" },
        { val: "B", text: "Yes, it's possible" },
        { val: "C", text: "Yes, but only from global scope to private scope" },
        { val: "D", text: "Yes, but only from private scope to global scope" }
    ],
    answer: "A"
},

{
    q: `Which of the following is true about g_scratchpad? (Choose two.)`,
    options: [
        { val: "A", text: "Used to push information from the server to the client" },
        { val: "B", text: "Does not exist on the mobile platform" },
        { val: "C", text: "Has constructors and methods" },
        { val: "D", text: "Has default properties passed by client-side scripts" }
    ],
    answer: "A,B"
},

{
    q: `Client-side scripts manage what?`,
    options: [
        { val: "A", text: "User access" },
        { val: "B", text: "Database and backend" },
        { val: "C", text: "Playbook access" },
        { val: "D", text: "Forms and Form Fields" }
    ],
    answer: "D"
},

{
    q: `Which are reasons an application could be developed on the ServiceNow platform? (Choose three.)`,
    options: [
        { val: "A", text: "It needs workflow to manage processes." },
        { val: "B", text: "It requires reporting capabilities." },
        { val: "C", text: "It uses forms extensively to interact with data." },
        { val: "D", text: "It requires low-level programming libraries." },
        { val: "E", text: "It uses multimedia features." }
    ],
    answer: "A,B,C"
},

{
    q: `Once an application is ready to share, which of the following methods of publishing are supported by ServiceNow? (Choose three.)`,
    options: [
        { val: "A", text: "Publish to an application repository" },
        { val: "B", text: "Publish to a local drive" },
        { val: "C", text: "Publish to the ServiceNow Store" },
        { val: "D", text: "Publish to an Update Set" },
        { val: "E", text: "Publish to a spreadsheet" }
    ],
    answer: "A,C,D"
},
{
    q: `When creating application tables, a user role is automatically added to the table record. Which other role does an application typically have?`,
    options: [
        { val: "A", text: "Application Super User" },
        { val: "B", text: "Application Fulfiller" },
        { val: "C", text: "Application Admin" },
        { val: "D", text: "Application Manager" }
    ],
    answer: "C"
},

{
    q: `What data types of Flow Designer variables are supported to store record data and complex data? (Choose three.)`,
    options: [
        { val: "A", text: "Label data type" },
        { val: "B", text: "Integer" },
        { val: "C", text: "Array.Reference" },
        { val: "D", text: "Choice" },
        { val: "E", text: "String" }
    ],
    answer: "B,C,E"
},

{
    q: `What are the features of Flow Designer? (Choose three.)`,
    options: [
        { val: "A", text: "Add stages to a flow." },
        { val: "B", text: "Call a flow from another flow or subflow." },
        { val: "C", text: "Test a flow using the 'Run as' feature." },
        { val: "D", text: "Support Java Scripting code to test conditions that trigger the flow." },
        { val: "E", text: "Run a flow from a Catalog item." }
    ],
    answer: "A,C,E"
},

{
    q: `Assume a table called table exists and contains 3 fields: field1, field2, field3.

Examine the Access Control list for table:

• table.None read Access Control for users with the admin and itil roles
• table.field read Access Control for users with the admin role

Which field or fields can a user with the itil role read?`,
    options: [
        { val: "A", text: "field3 only" },
        { val: "B", text: "field1 and field3" },
        { val: "C", text: "All fields" },
        { val: "D", text: "All fields except field3" }
    ],
    answer: "D"
},

{
    q: `What are the methods provided by Guided Application Creator (GAC) to create a table? (Choose 3)`,
    options: [
        { val: "A", text: "Upload a Spreadsheet file" },
        { val: "B", text: "Extend a table" },
        { val: "C", text: "Create a table from scratch" },
        { val: "D", text: "Copy a table" },
        { val: "E", text: "Upload an XML file" }
    ],
    answer: "A,B,C"
},

{
    q: `Which determines the relationships between fields in an Import Set Table to fields in an existing ServiceNow Table?`,
    options: [
        { val: "A", text: "Transform Maps" },
        { val: "B", text: "Dependency View" },
        { val: "C", text: "Table Maps" },
        { val: "D", text: "Update Sets" }
    ],
    answer: "A"
},

{
    q: `Which configuration helps to prevent modification or hide the Script Include code from a user?`,
    options: [
        { val: "A", text: "Setting the Protection Policy" },
        { val: "B", text: "Setting the Caller Access" },
        { val: "C", text: "Enabling the Script Include as a Client Callable" },
        { val: "D", text: "Enabling the ITIL access control to the user" }
    ],
    answer: "A"
},

{
    q: `If multiple email notifications are configured for a record, which field is used to determine which email notifications and which to skip?`,
    options: [
        { val: "A", text: "Rank" },
        { val: "B", text: "Weight" },
        { val: "C", text: "Order" },
        { val: "D", text: "Priority" }
    ],
    answer: "B"
},

{
    q: `Which of the following is NOT a GlideUser (g_user) method?`,
    options: [
        { val: "A", text: "username()" },
        { val: "B", text: "getFullName()" },
        { val: "C", text: "hasRole()" },
        { val: "D", text: "hasRoleExactly()" }
    ],
    answer: "A"
},

{
    q: `Which allows customers to upload and distribute applications between their instances?`,
    options: [
        { val: "A", text: "Application repository" },
        { val: "B", text: "Import Sets" },
        { val: "C", text: "Application library" },
        { val: "D", text: "Application records" }
    ],
    answer: "A"
},
{
    q: `Which can be used to design a long form by breaking it into shorter forms?`,
    options: [
        { val: "A", text: "annotations" },
        { val: "B", text: "sections" },
        { val: "C", text: "tags" },
        { val: "D", text: "activity formatters" },
        { val: "E", text: "templates" }
    ],
    answer: "B"
},

{
    q: `Which method gives immediate feedback and targeted feedback to users?`,
    options: [
        { val: "A", text: "g_form.showMessages()" },
        { val: "B", text: "g_form.alert()" },
        { val: "C", text: "g_form.confirm()" },
        { val: "D", text: "g.form.addInfoMessage()" }
    ],
    answer: "D"
},

{
    q: `How many modules are created when a new application table is created?`,
    options: [
        { val: "A", text: "zero or one module" },
        { val: "B", text: "one or many modules" },
        { val: "C", text: "one module" },
        { val: "D", text: "two modules" }
    ],
    answer: "C"
},

{
    q: `How do you configure a Scheduled Job to execute on the last day of every month?`,
    options: [
        { val: "A", text: "Set the Run field value to Periodically and the Repeat Interval value to 31" },
        { val: "B", text: "Set the Run field value to Periodically and the Repeat Interval value to Last Day" },
        { val: "C", text: "Set the Run field value to Monthly and the Day field to 31" },
        { val: "D", text: "Set the Run field value to Monthly and the Day field to Last Day" }
    ],
    answer: "C"
},

{
    q: `What is the reason for creating a new table for an application rather than extending an existing table?`,
    options: [
        { val: "A", text: "The application will not require a workflow." },
        { val: "B", text: "The application must import data from an external source." },
        { val: "C", text: "The application will integrate with a live feed." },
        { val: "D", text: "No table with similar fields exist." }
    ],
    answer: "D"
},

{
    q: `What is the feature of the "script include"?`,
    options: [
        { val: "A", text: "It is a centralized location for reuseable script functions." },
        { val: "B", text: "It is a scripting language." },
        { val: "C", text: "It is an object-oriented language." },
        { val: "D", text: "It is a script file." }
    ],
    answer: "A"
},

{
    q: `Which is generated to indicate that something has occurred in a ServiceNow instance?`,
    options: [
        { val: "A", text: "A Script Action" },
        { val: "B", text: "An Event" },
        { val: "C", text: "A UI Action" },
        { val: "D", text: "An Event" },
        { val: "E", text: "A Script Macro" }
    ],
    answer: "C"
},

{
    q: `Which type of chart can be created by right-clicking on a column header in a List View? (Choose two)`,
    options: [
        { val: "A", text: "Bar Char" },
        { val: "B", text: "Pie Chart" },
        { val: "C", text: "HIstorgram" },
        { val: "D", text: "Line" },
        { val: "E", text: "Scatter" }
    ],
    answer: "A,B"
}
];
