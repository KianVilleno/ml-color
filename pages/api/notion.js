import { Client } from "@notionhq/client";
const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });
const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE;

const addItem = async ({ body: data }, res) => {
  const response = await notion.databases.retrieve({ database_id: databaseId });

  const { properties: _properties } = response;

  let properties = {};

  for (let [key, value] of Object.entries(data)) {
    if (Boolean(_properties[key]) && value != "") {
      let propertyValue;
      switch (_properties[key].type) {
        case "multi_select":
          propertyValue = {
            name: value,
          };
          break;
        default:
          propertyValue = {
            text: {
              content: value,
            },
          };
      }
      properties[key] = {
        [_properties[key].type]: [propertyValue],
      };
    }
  }

  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties,
    });
    console.log("Success! Entry added.");
    res.json(response);
  } catch (error) {
    console.error(error.body);
    res.status(500).json(error);
  }
};

export default addItem;
