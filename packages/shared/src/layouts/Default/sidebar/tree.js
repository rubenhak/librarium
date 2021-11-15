import React from 'react';
import TreeNode from './treeNode';

const Tree = ({ menu }) => {
  return menu?.items?.map((menuItem, index) => <TreeNode key={index} {...menuItem} />) || null;
};

export default Tree;
