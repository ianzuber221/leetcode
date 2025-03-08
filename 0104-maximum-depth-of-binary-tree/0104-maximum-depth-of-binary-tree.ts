/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    let maxDepth = 0
    const recurse = (node: TreeNode, depth: number = 0):void => {
        if(node)depth++
        if(node?.left) recurse(node.left, depth)
        if(node?.right)recurse(node.right, depth)
        if(depth > maxDepth) maxDepth = depth
    }
    recurse(root)
    return maxDepth
};