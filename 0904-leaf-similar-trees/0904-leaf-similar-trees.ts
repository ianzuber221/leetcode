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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const sequence1 = [], sequence2 = [];
    const findLeaves = (node: TreeNode, sequence:number[]) => {
        if(!node.left && !node.right)sequence.push(node.val)
        if(node.left){
            findLeaves(node.left, sequence)
        }
        if(node.right){
        findLeaves(node.right, sequence)
        }
    }
    findLeaves(root1,sequence1)
    findLeaves(root2,sequence2)//cant push twice
     console.log(sequence1,sequence2)
     if(sequence1.length !== sequence2.length)return false
    for(const [ind, item] of sequence1.entries()){
        if(item !== sequence2[ind]) return false
    }
    return true
};