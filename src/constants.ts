export type AccountType = {
    accountId: number,
      email: string,
      authToken: string,
      creationDate: string,
}

export type ProfileType = {
    profileId: number,
    accountId: number,
    country: string,
    marketplace: string,
}

export type CampaignType = {
      campaignId: number,
      profileId: number, 
      clicks: number,
      cost: number,
      date: string,
}

export const ACCOUNTS: AccountType[] = [
    {
      accountId: 1,
      email: 'example@email.com',
      authToken: 'abc123xyz456',
      creationDate: '2024-01-17',
    },
    {
      accountId: 2,
      email: 'another@email.com',
      authToken: 'def456uvw789',
      creationDate: '2024-01-18',
    },
    {
      accountId: 3,
      email: 'user@email.com',
      authToken: 'ghi789rst012',
      creationDate: '2024-01-19',
    },
    {
      accountId: 4,
      email: 'test@email.com',
      authToken: 'jkl012mno345',
      creationDate: '2024-01-20',
    },
    {
      accountId: 5,
      email: 'sample@email.com',
      authToken: 'pqr678stu901',
      creationDate: '2024-01-21',
    },
    {
      accountId: 6,
      email: 'demo@email.com',
      authToken: 'vwx234yz567',
      creationDate: '2024-01-22',
    },
    {
      accountId: 7,
      email: 'info@email.com',
      authToken: 'abc890def123',
      creationDate: '2024-01-23',
    },
    {
      accountId: 8,
      email: 'team@email.com',
      authToken: 'ghi456jkl789',
      creationDate: '2024-01-24',
    },
    {
      accountId: 9,
      email: 'hello@email.com',
      authToken: 'mno012pqr345',
      creationDate: '2024-01-25',
    },
    {
      accountId: 10,
      email: 'world@email.com',
      authToken: 'stu678vwx901',
      creationDate: '2024-01-26',
    },
  ];

  export const PROFILES: ProfileType[] = [
    {
      profileId: 1,
      accountId: 1,
      country: 'USA',
      marketplace: 'Amazon',
    },
    {
      profileId: 2,
      accountId: 1,
      country: 'Canada',
      marketplace: 'eBay',
    },
    {
      profileId: 3,
      accountId: 2,
      country: 'Germany',
      marketplace: 'Amazon',
    },
    {
      profileId: 4,
      accountId: 3,
      country: 'France',
      marketplace: 'Etsy',
    },
    {
      profileId: 5,
      accountId: 3,
      country: 'Spain',
      marketplace: 'Etsy',
    },
    {
      profileId: 6,
      accountId: 4,
      country: 'Italy',
      marketplace: 'Amazon',
    },
    {
      profileId: 7,
      accountId: 5,
      country: 'UK',
      marketplace: 'eBay',
    },
    {
      profileId: 8,
      accountId: 5,
      country: 'Australia',
      marketplace: 'Amazon',
    },
    {
      profileId: 9,
      accountId: 6,
      country: 'Japan',
      marketplace: 'Rakuten',
    },
    {
      profileId: 10,
      accountId: 7,
      country: 'Brazil',
      marketplace: 'MercadoLibre',
    },
  ];

  export const findProfiles = (accountId: number): ProfileType[] | undefined => {
    const profiles = PROFILES.filter((profile: ProfileType) => profile.accountId === accountId)
    
    if (!profiles.length) return;
    
    return profiles;
  }

export const CAMPAIGNS: CampaignType[] = [
    {
      campaignId: 1,
      profileId: 1, 
      clicks: 500,
      cost: 1000,
      date: '2024-01-17',
    },
    {
      campaignId: 2,
      profileId: 1,
      clicks: 700,
      cost: 1500,
      date: '2024-01-18',
    },
    {
      campaignId: 3,
      profileId: 2, 
      clicks: 300,
      cost: 800,
      date: '2024-01-19',
    },
    {
      campaignId: 4,
      profileId: 3, 
      clicks: 1000,
      cost: 2000,
      date: '2024-01-20',
    },
    {
      campaignId: 5,
      profileId: 3, 
      clicks: 1200,
      cost: 2500,
      date: '2024-01-21',
    },
    {
      campaignId: 6,
      profileId: 4, 
      clicks: 400,
      cost: 1200,
      date: '2024-01-22',
    },
    {
      campaignId: 7,
      profileId: 5, 
      clicks: 600,
      cost: 1800,
      date: '2024-01-23',
    },
    {
      campaignId: 8,
      profileId: 5, 
      clicks: 800,
      cost: 2200,
      date: '2024-01-24',
    },
    {
      campaignId: 9,
      profileId: 6, 
      clicks: 200,
      cost: 600,
      date: '2024-01-25',
    },
    {
      campaignId: 10,
      profileId: 7, 
      clicks: 900,
      cost: 2400,
      date: '2024-01-26',
    },
  ];

  export const findCampaigns = (profileId: number): CampaignType[] | undefined => {
    const campaigns = CAMPAIGNS.filter((campaign: CampaignType) => campaign.profileId === profileId)
    
    if (!campaigns.length) return;
    
    return campaigns;
  }
 