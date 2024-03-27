"use client";
import { Gitgraph, Orientation, templateExtend } from "@gitgraph/react";

enum TemplateName {
  Metro = "metro",
  BlackArrow = "blackarrow",
}

const options = {
  branchLabelOnEveryCommit: true,
  orientation: Orientation.Horizontal,
  template: templateExtend(TemplateName.Metro, {
    colors: [
      "#fa6d01",
      "#4f4f4f",
      "#34ccc1",
      "darkgreen",
      "yellowgreen",
      "navy",
    ],
    branch: {
      lineWidth: 6,
      spacing: 40,
      label: {
        display: false,
      },
    },
    commit: {
      message: {
        displayAuthor: false,
        displayHash: false,
      },
      dot: {
        size: 15,
        strokeColor: "white",
        strokeWidth: 2,
      },
      spacing: 50,
    },
    arrow: {
      size: 0,
      color: "orange",
      offset: -1.5,
    },
  }),
};

const GitFlow = () => {
  return (
    <Gitgraph options={options}>
      {(gitgraph) => {
        const master = gitgraph.branch("Main");
        master.commit("");
        master.commit("");
        master.commit({
          dotText: "A",
          style: {
            dot: {
              size: 15,
              color: "white",
              strokeWidth: 5,
              strokeColor: "#fa6d01",
            },
          },
        });
        let branch1 = gitgraph.branch("1");
        branch1.commit("");
        branch1.commit({
          dotText: "B",
          style: {
            dot: {
              size: 15,
              color: "white",
              strokeWidth: 5,
              strokeColor: "#4f4f4f",
            },
          },
        });
        let branch2 = branch1.branch("2");
        branch2.commit("");
        master.commit("");
        branch2.commit("");
        branch1.merge(branch2);
        branch1.commit("");
        master.merge({
          branch: branch1,
          commitOptions: {
            dotText: "C",
            style: {
              dot: {
                size: 15,
                color: "white",
                strokeWidth: 5,
                strokeColor: "#fa6d01",
              },
            },
          },
        });
      }}
    </Gitgraph>
  );
};

export default GitFlow;
