# delivery-run-details-dashboard

Create a webpage with a header written "Report: Delivery Run Details" with a border around it. Then on the left side of the screen right next to the header, a block which extends to halfway of the page downwards, and a third of the page in terms of width (meaning it will have a rectangular form). In that block, write "Dashboard" and put a dropdown menu labeled "school1", and under it, another dropdown menu labeled "SKU" (make these dropdown menus have the ability to connect to a database and display the information of the database they are connected to when they are dropped down). Make sure that the block remains on the screen even when the user scrolls. Under the header, on the right side of the "dashboard" block, put a dropdown menu labeled "school2" (make the dropdown menu have the ability to connect to a database and display the information of the database it is connected to when it is dropped down) and next to that dropdown menu, put a "Previous" button, then on the right side of the "Previous" button, put a "Next button". Make sure that when the "school" dropdown menu next to the buttons displays the first school in the list, the previous button is greyed out and can't be pressed, make it to only be pressed when the school from the second to the end is selected in the dropdown menu. Make the "Next" button to be greyed out and not be able to be pressed when the last school in the list is selected from the dropdown menu. Make it to only be pressed when the school from the second last to the first is selected in the dropdown menu. Under the dropdown menu labeled "school2", make a message that says "Select a school for this delivery run to view it's details" when no school from the dropdown menu is selected. When a school is selected, make that message disappear. Under that message, write "Exception period menu", this part will be connected to the exceptions page and it functions like this- if the school selected from the dropdown menu was supposed to get rice and there is no rice from 2024-05-02 to 2024-05-04, and it is replaced with bread next to "Exception period menu", this will be written- Bread (2024-05-02 to 2024-05-04), meaning that's the date range that the bread (from the SKU list) will be eaten and the rice is not available. Then under "Exception period menu", write "Actual menu", this displays the SKU that was supposed to be delivered but not available from a certain date, for example, in this case since the rice is not available, we can say is was available from (2024-04-28 to 2024-05-02) so next to "Actual menu" if the SKU that was supposed to be delivered is rice, this will be displayed next to "Actual menu"- rice (2024-04-28 to 2024-05-02), putting in the date range in which it was available before it was replaced. Under "Actual menu", put a table labeled "SKU type exceptions". This table will have 4 columns, the first one will have view, from the second row going onwards (which will be a link to the exceptions page), second columb will be titled "SKU", third column will be titled "From", and the fourth column will be titled "To". The SKU will show the item which was use as a replacement. For example, sticking to the rice being replaced by the bread, let's say they ordered rice, potatoes, soup and tea, and rice finished, it has to be replaced, and bread is the replacement, the table will show bread under the SKU column, and under the From column, it will be the date it was first used, and under To, it will be the date it was last used. Under that table, put a "SKUs" dropdown menu that will display the list of SKUs with the replacement. For example, if rice, potatoes, soup and tea were ordered and the rice finished and was replaced with bread, the dropdown menu must display bread, potatoes, soup and tea. Next to that dropdown menu, put a "Previous" button, then on the right side of the "Previous" button, put a "Next button". Make sure that when the "SKUs" dropdown menu next to the buttons displays the first list of SKUs in the dropdown menu, the previous button is greyed out and can't be pressed, make it to only be pressed when the list of SKUs from the second to the end is selected in the dropdown menu. Make the "Next" button to be greyed out and not be able to be pressed when the last list of SKUs in the dropdown menu is selected from the dropdown menu. Make it to only be pressed when the list of SKUs from the second last to the first is selected in the dropdown menu. Make all the dropdown menus be able to connect to a database.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/delivery-run-details-dashboard.git
cd delivery-run-details-dashboard
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
