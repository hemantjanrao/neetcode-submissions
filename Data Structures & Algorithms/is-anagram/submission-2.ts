class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length != t.length){
            return false;
        }

        const count: Map<string, number> = new Map();

        for (const ch of s){
            count.set(ch, (count.get(ch) ?? 0)+1)
        }

        for(const ch of t){
            const current = count.get(ch);
            if(current === undefined || current ===0){
                return false;
            }
            count.set(ch, current-1);
        }

        return true;
    

    }
}
