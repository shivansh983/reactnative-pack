import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Card data
const CARDS = [
  { id: 1, title: 'Groceries', subtitle: 'Milk, eggs, bread' },
  { id: 2, title: 'Workout', subtitle: 'Leg day — 45 min' },
  { id: 3, title: 'Reading', subtitle: 'Finish chapter 4' },
  { id: 4, title: 'Side project', subtitle: 'Wire up the auth screens' },
  { id: 5, title: 'Call home', subtitle: 'Sunday evening' },
  { id: 6, title: 'Bills', subtitle: 'Electricity + internet' },
  { id: 7, title: 'Clean desk', subtitle: 'It has been a while' },
  { id: 8, title: 'Plan trip', subtitle: 'Shortlist three places' },
]

// Screen
export default function Index() {
  return (
    <SafeAreaView style={styles.screen} edges={['bottom']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {
          // Vertical list
        }
        <Text style={styles.heading}>Vertical list</Text>

        {CARDS.map((card) => (
          <View key={card.id} style={styles.card}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
          </View>
        ))}

        {
          // Horizontal row
        }
        <Text style={styles.heading}>Horizontal row</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.rowContent}
        >
          {CARDS.slice(0, 5).map((card) => (
            <View key={card.id} style={[styles.card, styles.tile]}>
              <Text style={styles.cardTitle}>{card.title}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
    gap: 12,
  },
  heading: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#64748b',
    marginTop: 8,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    // iOS shadow
    shadowColor: '#0f172a',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    // Android shadow
    elevation: 2,
  },
  tile: {
    width: 150,
    height: 100,
    justifyContent: 'flex-end',
  },
  rowContent: {
    gap: 12,
    paddingVertical: 4,
    paddingRight: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  cardSubtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#64748b',
  },
})
