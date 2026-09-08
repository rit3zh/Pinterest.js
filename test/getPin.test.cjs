const assert = require("node:assert/strict");
const { test } = require("node:test");
const { getPin } = require("../dist/functions/getPin");

const imageUrl = "https://i.pinimg.com/originals/test.jpg";

function pinResponse(reactionFields) {
  return {
    resource_response: {
      data: {
        id: "123456789",
        images: {
          "600x315": { url: imageUrl },
          "564x": { url: imageUrl },
          "736x": { url: imageUrl },
          orig: { url: imageUrl },
        },
        board: { owner: {} },
        pinner: { full_name: "Test Creator", username: "testcreator" },
        aggregated_pin_data: {},
        ...reactionFields,
      },
    },
  };
}

for (const [name, fields, expected] of [
  ["missing reaction_counts", {}, { label: "0", numbers: 0 }],
  ["empty reaction_counts", { reaction_counts: {} }, { label: "0", numbers: 0 }],
  ["null reaction_counts", { reaction_counts: null }, { label: "0", numbers: 0 }],
  ["another reaction type", { reaction_counts: { 2: 5 } }, { label: "0", numbers: 0 }],
  ["null reaction count", { reaction_counts: { 1: null } }, { label: "0", numbers: 0 }],
  ["zero reactions", { reaction_counts: { 1: 0 } }, { label: "0", numbers: 0 }],
  ["small reaction count", { reaction_counts: { 1: 42 } }, { label: "42", numbers: 42 }],
  ["abbreviated reaction count", { reaction_counts: { 1: 1500 } }, { label: "1.5K", numbers: 1500 }],
]) {
  test(`getPin handles ${name}`, async (t) => {
    const originalFetch = globalThis.fetch;
    t.after(() => { globalThis.fetch = originalFetch; });
    globalThis.fetch = async () => ({ json: async () => pinResponse(fields) });

    const pin = await getPin("123456789");

    assert.deepEqual(pin.reactions, expected);
    assert.equal(pin.id, "123456789");
    assert.equal(pin.images.og, imageUrl);
    assert.equal(pin.creator.username, "testcreator");
  });
}
