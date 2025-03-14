class Trie {
    constructor() {
        
    }
    hash = {}
    prefixHash = {}
    insert(word: string): void {
        this.hash[word] = true
        let prefix = ''
        for(const char of word){
            prefix += char
            this.prefixHash[prefix] = true
        }
    }

    search(word: string): boolean {
        return !!this.hash[word]
    }

    startsWith(prefix: string): boolean {
        return !!this.prefixHash[prefix]
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */