import pandas as pd
import matplotlib.pyplot as plt

# Load dataset
df = pd.read_csv("../indian_healthcare_patient_records.csv")

# Basic information
print("Dataset Shape:", df.shape)

print("\nColumns:")
print(df.columns.tolist())

print("\nFirst 5 Records:")
print(df.head())

print("\nData Types:")
print(df.dtypes)

print("\nMissing Values:")
print(df.isnull().sum())

print("\nDuplicate Records:")
print(df.duplicated().sum())

print("\nStatistical Summary:")
print(df.describe())

# Categorical information
print("\nPrimary Diagnosis:")
print(df["Primary_Diagnosis"].value_counts())

print("\nTreatment Type:")
print(df["Treatment_Type"].value_counts())

print("\nHospital Type:")
print(df["Hospital_Type"].value_counts())

print("\nInsurance Covered:")
print(df["Insurance_Covered"].value_counts())

# Simple graphs

plt.figure(figsize=(8,5))
df["Primary_Diagnosis"].value_counts().plot(kind="bar")
plt.title("Primary Diagnosis Distribution")
plt.xlabel("Diagnosis")
plt.ylabel("Number of Patients")
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

plt.figure(figsize=(8,5))
df["Treatment_Type"].value_counts().plot(kind="bar")
plt.title("Treatment Type Distribution")
plt.xlabel("Treatment")
plt.ylabel("Number of Patients")
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

print("\nData Analysis Completed Successfully!")