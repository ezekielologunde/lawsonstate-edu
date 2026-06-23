import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const quickLinks = [
  { label: 'Student Portal', color: '#1e3a8a' },
  { label: 'Course Registration', color: '#1d4ed8' },
  { label: 'Financial Aid', color: '#1e40af' },
  { label: 'Campus Map', color: '#1e3a8a' },
];

export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.collegeName}>LAWSON STATE</Text>
        <Text style={styles.collegeSubtitle}>COMMUNITY COLLEGE</Text>
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Your Future{'\n'}Starts Here</Text>
          <Text style={styles.heroSub}>
            Quality education, career training, and community leadership.
          </Text>
          <TouchableOpacity style={styles.applyBtn}>
            <Text style={styles.applyBtnText}>Apply Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Access</Text>
          <View style={styles.grid}>
            {quickLinks.map((item) => (
              <TouchableOpacity
                key={item.label}
                style={[styles.card, { backgroundColor: item.color }]}
              >
                <Text style={styles.cardText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Announcements</Text>
          <View style={styles.announcement}>
            <Text style={styles.announcementDate}>Jun 23, 2026</Text>
            <Text style={styles.announcementTitle}>Fall 2026 Registration Open</Text>
            <Text style={styles.announcementBody}>
              Registration for Fall 2026 is now open for all current students.
            </Text>
          </View>
          <View style={styles.announcement}>
            <Text style={styles.announcementDate}>Jun 15, 2026</Text>
            <Text style={styles.announcementTitle}>Financial Aid Deadline</Text>
            <Text style={styles.announcementBody}>
              Submit your FAFSA by July 1st to ensure aid for the upcoming semester.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#f4f4f5' },
  header: {
    backgroundColor: '#1e3a8a',
    paddingTop: 56,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },
  collegeName: { color: '#fff', fontSize: 22, fontWeight: '800', letterSpacing: 2 },
  collegeSubtitle: { color: '#bfdbfe', fontSize: 11, letterSpacing: 4, marginTop: 2 },
  body: { paddingBottom: 32 },
  hero: {
    backgroundColor: '#1e3a8a',
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  heroTitle: { color: '#fff', fontSize: 30, fontWeight: '700', lineHeight: 38 },
  heroSub: { color: '#bfdbfe', fontSize: 14, marginTop: 8, lineHeight: 22 },
  applyBtn: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 28,
    alignSelf: 'flex-start',
  },
  applyBtnText: { color: '#1e3a8a', fontWeight: '700', fontSize: 14 },
  section: { paddingHorizontal: 20, marginTop: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#111827', marginBottom: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  card: {
    width: '47%',
    borderRadius: 12,
    padding: 16,
    justifyContent: 'center',
    minHeight: 72,
  },
  cardText: { color: '#fff', fontWeight: '600', fontSize: 14 },
  announcement: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e4e4e7',
  },
  announcementDate: { color: '#2563eb', fontSize: 11, fontWeight: '600', marginBottom: 4 },
  announcementTitle: { color: '#111827', fontWeight: '700', fontSize: 14, marginBottom: 4 },
  announcementBody: { color: '#6b7280', fontSize: 13, lineHeight: 20 },
});
