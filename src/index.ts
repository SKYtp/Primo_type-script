// interface merge (int[] collection_1, int[] collection_2, int[] collection_3) : int []

// test data
let collect_a1: number[] = [0, 1, 5, 7, 9];
let collect_a2: number[] = [1, 2, 3, 6, 8];
let collect_a3: number[] = [10, 8, 7, 4, 0];

// get sort array from min to max if collection_1 and collection_2 is min to max and collection_3 is max to min
export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    //for keep result
    let collect_all: number[] = [];
    // for count array value
    let c1: number = 0;
    let c2: number = 0;
    let c3: number = collection_3.length - 1;
    while(c1 < collection_1.length || c2 < collection_2.length || c3 >= 0){
        // for check if out of array length
        const keep1 = c1 < collection_1.length ? collection_1[c1] : Number.POSITIVE_INFINITY;
        const keep2 = c2 < collection_2.length ? collection_2[c2] : Number.POSITIVE_INFINITY;
        const keep3 = c3 >= 0 ? collection_3[c3] : Number.POSITIVE_INFINITY;
        if(keep1 <= keep2 && keep1 <= keep3){
            collect_all.push(keep1);
            c1++;
        }else if(keep2 <= keep1 && keep2 <= keep3){
            collect_all.push(keep2);
            c2++;
        }else{
            collect_all.push(keep3);
            c3--;
        }
    }

    // return [...collection_1, ...collection_2, ...collection_3]
    return collect_all;  //return result
}

console.log(merge(collect_a1,collect_a2,collect_a3));