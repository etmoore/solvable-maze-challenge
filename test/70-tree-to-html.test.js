// thanks to Ian Behrmann for this one!
var treeToHtml = require('../src/tree-to-html');
var expect = require('chai').expect;

xdescribe('treeToHtml', function () {
  it('takes a tree and generates valid HTML lists', function () {
    var tree = {
      value: "Tom",
      children: [
        {
          value: "Bob",
          children: [
            { value: "Jill",
              children: [
                {
                  value: "Luke",
                  children: []
                },
                {
                  value: "Cody",
                  children: []
                }
              ]
            }
          ]
        },
        {
          value: "Alex",
          children: [
            { value: "Susan", children: [] }
          ]
        },
      ]
    };

   expect(treeToHtml(tree)).to.eql([
     "<ul>",
     "  <li>Tom",
     "    <ul>",
     "      <li>Bob",
     "        <ul>",
     "          <li>Jill",
     "            <ul>",
     "              <li>Luke</li>",
     "              <li>Cody</li>",
     "            </ul>",
     "          </li>",
     "        </ul>",
     "      </li>",
     "      <li>Alex",
     "        <ul>",
     "          <li>Susan</li>",
     "        </ul>",
     "      </li>",
     "    </ul>",
     "  </li>",
     "</ul>"
   ].join("\n"))
 })
})
