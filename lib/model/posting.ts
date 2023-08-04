export namespace Model 
{
    export interface JobSearch { 
        searchText: string,
        jobCategory: string,
        jobLocation: string,  
    }
    
    export interface PostingInfo { 
        title: string,
        description: string,
        //createdAt: Date,
        hiringParty: string  
    }
    
    export interface JobSearchSliceState extends JobSearch {
        status: 'idle' | 'loading' | 'failed',
        jobResult: PostingInfo[],
        currentJobPosting: PostingInfo,
        pageNo: number, 
        pageSize: number
    }    

    export interface JobSearchModel extends JobSearch {
        skip: number, 
        pageSize: number
    }
}