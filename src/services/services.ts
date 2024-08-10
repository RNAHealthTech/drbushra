// services.ts

export interface ServiceData {
    title: string;
    heroImage: string;
    description: string;
    symptoms: string[];
    causes: string[];
    therapies: string[];
}

const servicesData: Record<string, ServiceData> = {
    "headache-migraine": {
        title: "Headache & Migraine",
        heroImage: "/images/headache1.jpg",
        description: "Specialized treatment for chronic headaches and migraines.",
        symptoms: [
            "Intense throbbing pain",
            "Sensitivity to light and sound",
            "Nausea and vomiting",
        ],
        causes: [
            "Stress and tension",
            "Hormonal changes",
            "Environmental factors",
        ],
        therapies: [
            "Medication management",
            "Lifestyle modifications",
            "Relaxation techniques",
        ],
    },
    "anger-stress-management": {
        title: "Anger and Stress Management",
        heroImage: "/images/headache2.jpg",
        description: "Techniques to manage anger and reduce stress in daily life.",
        symptoms: [
            "Irritability and short temper",
            "Physical tension and restlessness",
            "Sleep disturbances",
        ],
        causes: [
            "Work or personal life pressures",
            "Unresolved past traumas",
            "Genetic factors",
        ],
        therapies: [
            "Cognitive-behavioral therapy",
            "Mindfulness and meditation",
            "Stress reduction workshops",
        ],
    },
    "anxiety-depression": {
        title: "Anxiety + Depression",
        heroImage: "/images/depression.jpg",
        description: "Comprehensive care for anxiety and depression disorders.",
        symptoms: [
            "Persistent feelings of sadness or emptiness",
            "Excessive worry or fear",
            "Changes in sleep patterns",
            "Loss of interest in activities",
        ],
        causes: [
            "Genetic factors",
            "Brain chemistry imbalances",
            "Traumatic life events",
            "Chronic stress",
        ],
        therapies: [
            "Cognitive-behavioral therapy (CBT)",
            "Medication management",
            "Mindfulness-based therapies",
            "Group therapy sessions",
        ],
    },
    "bipolar-disorder": {
        title: "Bipolar Disorder",
        heroImage: "/images/bipolar.jpg",
        description: "Specialized treatment for bipolar disorder and mood stabilization.",
        symptoms: [
            "Extreme mood swings",
            "Manic episodes of high energy",
            "Depressive episodes",
            "Changes in sleep patterns and appetite",
        ],
        causes: [
            "Genetic predisposition",
            "Brain structure and functioning",
            "Environmental factors",
            "Stress and major life changes",
        ],
        therapies: [
            "Mood stabilizing medications",
            "Psychoeducation",
            "Cognitive-behavioral therapy",
            "Family-focused therapy",
        ],
    },
    "psychosis": {
        title: "Psychosis",
        heroImage: "/images/psychosis.png",
        description: "Expert care for various forms of psychosis.",
        symptoms: [
            "Hallucinations",
            "Delusions",
            "Disorganized thinking and speech",
            "Social withdrawal",
        ],
        causes: [
            "Genetic factors",
            "Brain chemistry imbalances",
            "Substance abuse",
            "Severe stress or trauma",
        ],
        therapies: [
            "Antipsychotic medications",
            "Cognitive-behavioral therapy for psychosis",
            "Family interventions",
            "Social skills training",
        ],
    },
    "child-adolescent-guidance": {
        title: "Child & Adolescent Guidance",
        heroImage: "/images/child-adolescent.jpg",
        description: "Supportive guidance for children and adolescents.",
        symptoms: [
            "Behavioral problems",
            "Academic difficulties",
            "Social interaction issues",
            "Emotional regulation challenges",
        ],
        causes: [
            "Family dynamics",
            "Peer pressure",
            "Developmental changes",
            "Traumatic experiences",
        ],
        therapies: [
            "Play therapy",
            "Family therapy",
            "Cognitive-behavioral therapy for youth",
            "Social skills training",
        ],
    },
    "internet-technology-addiction": {
        title: "Internet & Technology Addiction",
        heroImage: "/images/tech-addiction.jpg",
        description: "Treatment for internet and technology-related addictions.",
        symptoms: [
            "Excessive time spent online",
            "Neglect of real-life relationships",
            "Withdrawal symptoms when not using technology",
            "Inability to control usage",
        ],
        causes: [
            "Underlying mental health issues",
            "Social anxiety",
            "Escapism",
            "Dopamine-driven feedback loops",
        ],
        therapies: [
            "Cognitive-behavioral therapy",
            "Digital detox programs",
            "Mindfulness training",
            "Support groups",
        ],
    },
    "lifestyle-relationship-issues": {
        title: "Lifestyle & Relationship Issues",
        heroImage: "/images/lifestyle-relationship.jpg",
        description: "Counseling for lifestyle changes and relationship problems.",
        symptoms: [
            "Communication difficulties",
            "Work-life balance struggles",
            "Intimacy issues",
            "Conflict resolution problems",
        ],
        causes: [
            "Poor communication skills",
            "Unresolved past traumas",
            "Conflicting values or goals",
            "External stressors",
        ],
        therapies: [
            "Couples therapy",
            "Individual counseling",
            "Life coaching",
            "Conflict resolution training",
        ],
    },
    "counselling": {
        title: "Counselling",
        heroImage: "/images/counselling.jpg",
        description: "General counseling services for various mental health concerns.",
        symptoms: [
            "Emotional distress",
            "Difficulty coping with life changes",
            "Low self-esteem",
            "Relationship problems",
        ],
        causes: [
            "Life transitions",
            "Unresolved past issues",
            "Stress and anxiety",
            "Personal growth challenges",
        ],
        therapies: [
            "Talk therapy",
            "Solution-focused brief therapy",
            "Narrative therapy",
            "Existential therapy",
        ],
    },
    "psychotherapy": {
        title: "Psychotherapy",
        heroImage: "/images/psychotherapy.jpg",
        description: "In-depth psychotherapy for long-term mental health improvement.",
        symptoms: [
            "Chronic mental health issues",
            "Personality disorders",
            "Trauma-related symptoms",
            "Recurring patterns of dysfunctional behavior",
        ],
        causes: [
            "Childhood experiences",
            "Traumatic events",
            "Genetic predisposition",
            "Complex life circumstances",
        ],
        therapies: [
            "Psychodynamic therapy",
            "Cognitive-behavioral therapy",
            "Dialectical behavior therapy",
            "Eye Movement Desensitization and Reprocessing (EMDR)",
        ],
    },
};

export default servicesData;